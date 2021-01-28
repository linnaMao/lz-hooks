import * as React from 'react';
import {
  DatePicker as AntdDatePicker,
  TimePicker as AntdTimePicker,
  TimePicker,
} from 'antd';

const { RangePicker } = AntdDatePicker;

interface IDatePickerProps {
  type: string;
}

const DatePicker: React.FC<IDatePickerProps> = props => {
  const { type } = props;

  const renderDate = () => {
    switch (type) {
      case 'datePicker':
        return <AntdDatePicker style={{ width: '100%' }} />;
      case 'dateTimePicker':
        return (
          <AntdDatePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            style={{ width: '100%' }}
          />
        );
      case 'montnPicker':
        return <AntdDatePicker picker="month" style={{ width: '100%' }} />;
      case 'rangePicker':
        return <RangePicker style={{ width: '100%' }} />;
      case 'rangeTimePicker':
        return (
          <RangePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            style={{ width: '100%' }}
          />
        );
      case 'timePicker':
        return <TimePicker style={{ width: '100%' }} />;
      default:
        return <AntdDatePicker style={{ width: '100%' }} />;
    }
  };

  return <>{renderDate()}</>;
};

export default DatePicker;
