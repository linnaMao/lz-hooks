import * as React from 'react';
import { zodiacs } from '../config';
import * as getDate from './utils';

const useLunar = (gy: number, gm: number, gd: number) => {
  //= === 算出农历, 传入日期对象, 传回农历日期对象
  // 该对象属性有 农历年year 农历月month 农历日day 是否闰年isLeap yearCyl dayCyl monCyl
  const objDate = new Date(gy, gm, gd);
  const [isLeap, setIsLeap] = React.useState(false);

  let i;
  let temp = 0;
  const baseDate = new Date(1900, 0, 31);
  // 算农历日期
  let offset = Math.floor((objDate.getTime() - baseDate.getTime()) / 86400000);

  const dayCyl = offset + 40;
  let monCyl = 14;

  for (i = 1900; i < 2050 && offset > 0; i++) {
    temp = getDate.lYearDays(i);
    offset -= temp;
    monCyl += 12;
  }

  if (offset < 0) {
    offset += temp;
    i--;
    monCyl -= 12;
  }

  // 农历年
  const yearC = i;
  const yearCyl = i - 1864;

  const leap = getDate.leapMonth(i); // 闰哪个月

  for (i = 1; i < 13 && offset > 0; i++) {
    // 闰月
    if (leap > 0 && i === leap + 1 && !isLeap) {
      --i;
      setIsLeap(true);
      temp = getDate.leapDays(yearC);
    } else {
      temp = getDate.monthDays(yearC, i);
    }

    // 解除闰月
    if (isLeap && i === leap + 1) {
      setIsLeap(false);
    }

    offset -= temp;

    if (!isLeap) {
      monCyl++;
    }
  }

  if (offset === 0 && leap > 0 && i === leap + 1) {
    if (isLeap) {
      setIsLeap(false);
    } else {
      setIsLeap(true);
      --i;
      --monCyl;
    }
  }

  if (offset < 0) {
    offset += temp;
    --i;
    --monCyl;
  }
  // 农历月
  const monthC = i;
  // 农历日
  const day = offset + 1;

  return {
    lunarYear: yearC,
    lunarMonth: monthC,
    lunarDay: day,
    lunarYearCn: getDate.cyclical(gy - 1900 + 36),
    lunarMonthCn: getDate.cDay(monthC, day).lunarMonthCn,
    lunarDayCn: getDate.cDay(monthC, day).lunarDayCn,
    zodiacYear: zodiacs[(gy - 4) % 12],
    isLeap,
    leap,
    yearCyl,
    dayCyl,
    monCyl,
  };
};

export default useLunar;
