import * as React from 'react';
import useCalendar from '..';

const Demo: React.FC = () => {
  const {
    gregorianYear,
    gregorianMonth,
    gregorianDay,
    weekday,
    hours,
    minutes,
    seconds,
    // 农历年月日、生肖年
    lunarYear,
    lunarMonth,
    lunarDay,
    zodiacYear,
    // 农历中文年月日
    lunarYearCn,
    lunarMonthCn,
    lunarDayCn,

    // 节气
    solarTerm,
  } = useCalendar();

  return (
    <div>
      <div>
        阳历：{gregorianYear}/{gregorianMonth}/{gregorianDay}
      </div>
      <div>
        时间：{hours}:{minutes}:{seconds} {weekday}
      </div>
      <div>
        农历：{lunarYear} {lunarMonth} {lunarDay}
      </div>
      <div>
        农历中文：{lunarYearCn} {lunarMonthCn} {lunarDayCn}
      </div>
      <div>生肖：{zodiacYear}</div>
      <div>节气：{solarTerm}</div>
    </div>
  );
};

export default Demo;
