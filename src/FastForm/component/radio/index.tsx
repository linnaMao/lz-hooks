import * as React from 'react';
import { Radio as AntdRadio } from 'antd';
import { IProps } from '../type';

const { Group } = AntdRadio;

interface IRadioProps extends IProps {
  options: any[];
}

const Radio: React.FC<IRadioProps> = props => {
  const { options, value, onChange } = props;

  const handleChange = (e: any) => {
    onChange?.(e.target.value);
  };

  return (
    <>
      <Group value={value} onChange={handleChange} style={{ width: '100%' }}>
        {options?.map(item => (
          <AntdRadio key={item.value} value={item.value}>
            {item.value}
          </AntdRadio>
        ))}
      </Group>
    </>
  );
};

export default Radio;
