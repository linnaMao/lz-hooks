import { useState, useEffect, useRef, DependencyList } from 'react';
import { Options, Request, FetchConfig, FetchResult } from './type';
import { usePersistFn } from '..';

class Fetch<T> {
  // 请求的方法
  request: Request<T>;

  // 配置 轮训、成功回调这种都放在这里，
  config: FetchConfig<T>;

  // 时序控制
  count = 0;

  // 轮训的定时器id
  pollingTimer: any = undefined;

  // useRequest作为返回值
  state: FetchResult<T> = {
    loading: false,
    data: undefined,
    setData: this.setData.bind(this),
    error: undefined,
    params: {},
    start: this.start.bind(this),
    cancel: this.cancel.bind(this),
  };

  subscribe: (s: FetchResult<T>) => void;

  constructor(
    request: Request<T>,
    config: FetchConfig<T>,
    subscribe: (s: FetchResult<T>) => void,
  ) {
    this.request = request;
    this.config = config;
    this.subscribe = subscribe;
  }

  setState(state = {}) {
    this.state = {
      ...this.state,
      ...state,
    };
    // 调用hook里面的setState
    this.subscribe(this.state);
  }

  setData(s: any) {
    const { data } = this.state;
    this.setState({
      data: typeof s === 'function' ? s(data) : s,
    });
  }

  async start(...args: any[]) {
    // 请求开始
    this.setState({
      loading: true,
      params: args,
    });

    // 处理时序
    this.count += 1;
    const count = this.count;

    // 重置轮询定时器
    if (this.pollingTimer) clearTimeout(this.pollingTimer);

    const result = await this.request(...args);
    // 已被废弃
    if (count !== this.count) {
      const err = new Error('请求过期');
      this.setState({ loading: false });
      return err;
    }

    // 请求出错
    if (result instanceof Error) {
      this.handleError(result);
    } else {
      // 请求正常
      this.handleSuccess(result);
    }

    // 开始下一个轮询
    if (this.config.pollingInterval) {
      this.pollingTimer = setTimeout(() => {
        this.refresh();
      }, this.config.pollingInterval);
    }

    // 如果要在start 后面用.then获取，那就在enhance一下
    return result;
  }

  // 接口取消请求
  cancel() {
    this.count += 1;
    this.setState({
      loading: false,
    });
    if (this.config.pollingInterval) {
      clearTimeout(this.pollingTimer);
    }
  }

  // 增强返回值
  enhanceResponse(oldResult: T) {
    if (oldResult instanceof Error) return oldResult;

    const { enhanceResponse = () => {} } = this.config;
    const newResult = enhanceResponse(oldResult) || oldResult;

    this.setState({ data: newResult });

    return newResult;
  }

  // 成功是的处理函数
  handleSuccess(result: T) {
    const { onSuccess = () => {} } = this.config;
    const enhanced = this.enhanceResponse(result) || result;

    this.setState({ loading: false, data: enhanced });

    if (onSuccess) {
      onSuccess(enhanced);
    }
  }

  // 错误时的处理函数
  handleError(err: Error) {
    const { onError = () => {} } = this.config;

    this.setState({ loading: false, error: err });

    onError(err);
  }

  // 刷新
  refresh() {
    const { params } = this.state;
    this.start(...params);
  }
}

function useRequest<T = any>(
  request: (...args: any[]) => Promise<T>,
  deps?: DependencyList | Options<T>,
  options?: Options<T>,
): FetchResult<T> {
  // 初始化参数
  const _deps = (Array.isArray(deps) ? deps : []) as DependencyList;
  const _options = (typeof deps === 'object' && !Array.isArray(deps)
    ? deps
    : options || {}) as Options<T>;

  const { manual = false, pollingInterval = 0 } = _options;

  const [fetchState, setFetchState] = useState<FetchResult<T> | null>(null);
  const fetchStateRef = useRef<FetchResult<T> | null>(null);
  useEffect(() => {
    fetchStateRef.current = fetchState;
  }, [fetchState]);

  // ---------------持久化不会变的函数------------
  const requestPersisted = usePersistFn(request);
  const enhanceResponse = usePersistFn(_options.enhanceResponse!);
  const onSuccess = usePersistFn(_options.onSuccess!);
  const onError = usePersistFn(_options.onError!);
  // ---------------持久化不会变的函数------------

  // 真正请求接口的函数
  const start = usePersistFn((...args) => {
    if (!fetchStateRef.current) {
      const fetch = new Fetch(
        requestPersisted,
        {
          onSuccess,
          enhanceResponse,
          onError,
          pollingInterval,
        },
        setFetchState,
      );

      fetchStateRef.current = fetch.state;
      setFetchState(fetch.state);
    }

    return fetchStateRef.current.start(...args);
  });

  // 初始化清后请求一次
  useEffect(() => {
    if (!manual) {
      start();
    }
    // 卸载时废弃请求
    return () => {
      fetchStateRef.current && fetchStateRef.current.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [..._deps]);

  return {
    loading: !manual,
    ...fetchState,
    start,
  } as FetchResult<T>;
}

export default useRequest;
