import * as React from 'react';
import { weekday } from './config';
import { Calendar } from './type';
import useSolarTerm from './useSolarTerm';
import useLunar from './useLunar';

const useCalender = () => {
  const now = new Date();

  // 用于计算农历年月日的数据
  const GY = now.getFullYear();
  const GM = now.getMonth();
  const GD = now.getDate();

  const year = now.getFullYear();
  const _month = now.getMonth() + 1;
  const _date = now.getDate();
  const _hours = now.getHours();
  const _minutes = now.getMinutes();
  const _seconds = now.getSeconds();

  // 开头添加0
  const month = _month.toString().padStart(2, '0');
  const date = _date.toString().padStart(2, '0');
  const hours = _hours.toString().padStart(2, '0');
  const minutes = _minutes.toString().padStart(2, '0');
  const seconds = _seconds.toString().padStart(2, '0');

  const [calender, setCalender] = React.useState<Calendar>({});
  const solarTerm = useSolarTerm(GY, GM, GD);
  const lunarInfo = useLunar(GY, GM, GD);

  React.useEffect(() => {
    setCalender({
      // 阳历年月日、星期
      gregorianYear: year,
      gregorianMonth: month,
      gregorianDay: date,
      weekday: weekday[now.getDay() - 1],
      hours,
      minutes,
      seconds,
      // 农历年月日、生肖年
      ...lunarInfo,
      // 节气
      solarTerm,
    });
  }, []);

  return calender;
};

export default useCalender;
