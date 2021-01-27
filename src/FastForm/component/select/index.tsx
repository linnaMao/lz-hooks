import * as React from 'react';
import { Select as AntdSelect } from 'antd';
import { IProps } from '../type';

const { Option } = AntdSelect;

type TMode = 'multiple' | 'tags';

interface ISelectProps extends IProps {
  options: any[];
  mode?: TMode;
}

const Select: React.FC<ISelectProps> = props => {
  const { options, value, mode, onChange } = props;

  const handleChange = (e: string) => {
    onChange?.(e);
  };

  return (
    <>
      <AntdSelect onChange={handleChange} value={value} mode={mode as TMode}>
        {options?.map((item: string) => (
          <Option value={item} key={item}>
            {item}
          </Option>
        ))}
      </AntdSelect>
    </>
  );
};

export default Select;
