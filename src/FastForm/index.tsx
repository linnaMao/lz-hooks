import * as React from 'react';
import {
  Form as AntdForm,
  Input,
  DatePicker,
  Button,
  Row,
  Col,
  Divider,
  InputNumber,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import moment from 'moment';
import { Radio, Select } from './component';

type TDefaultValue = {
  cn: string;
  value: string;
  rules?: any[];
  componentProps?: any;
  type: string;
  [propName: string]: any;
};

interface IFastFormProps {
  defaultValue: any;
  typeArr: TDefaultValue[];
}

const AntdItem = AntdForm.Item;

const FastForm: React.FC<IFastFormProps> = props => {
  const { defaultValue, typeArr } = props;
  const [form] = useForm();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const formTailLayout = {
    wrapperCol: { span: 18, offset: 3 },
  };

  const renderByType = (type: string, item: any) => {
    switch (type) {
      case 'input':
        return <Input />;
      case 'textArea':
        return <Input.TextArea style={{ width: '100%' }} />;
      case 'radio':
        return <Radio {...item} />;
      case 'datePicker':
        return <DatePicker style={{ width: '100%' }} />;
      case 'select':
        return <Select {...item} style={{ width: '100%' }} />;
      case 'number':
        return <InputNumber style={{ width: '100%' }} />;
      default:
        break;
    }
  };

  const onFinish = (e: any) => {
    console.log('e :>> ', e);
  };

  const onReset = () => {
    form.resetFields();
  };

  React.useEffect(() => {
    const { birthday } = defaultValue;
    // 初始值判断优化
    if (birthday) {
      defaultValue.birthday = moment(birthday) as any;
    }

    // 初始值绑定在value上，在重置过程中可以清楚初始值
    form.setFieldsValue(defaultValue);
  }, [defaultValue]);

  return (
    <>
      <Divider orientation="left">基本信息</Divider>
      <AntdForm
        form={form}
        name="FastForm"
        onFinish={onFinish}
        labelAlign="right"
        {...layout}
      >
        <Row gutter={[16, 24]}>
          {typeArr.map(item => (
            <Col span={12}>
              <AntdItem
                name={item.value}
                label={item.cn}
                rules={item?.rules as any[]}
                key={item.value}
                labelAlign="right"
              >
                {renderByType(item.type, item.componentProps)}
              </AntdItem>
            </Col>
          ))}
          <Col span={24}>
            <AntdItem {...formTailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                htmlType="button"
                onClick={onReset}
                style={{ margin: '0 16px' }}
              >
                Reset
              </Button>
            </AntdItem>
          </Col>
        </Row>
      </AntdForm>
    </>
  );
};

export default FastForm;
