import { Gan, Zhi, lunarInfo, cnStr1, cnStr2 } from '../config';

//= === 传回农历 year年的总天数
export const lYearDays = (y: number) => {
  let i;
  let sum = 348;
  for (i = 0x8000; i > 0x8; i >>= 1) {
    sum += lunarInfo[y - 1900] & i ? 1 : 0;
  }
  return sum + leapDays(y);
};

//= === 传回农历 year年闰月的天数
export const leapDays = (y: number) => {
  if (leapMonth(y)) {
    return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
  } else {
    return 0;
  }
};

//= === 传回农历 year年闰哪个月 1-12 , 没闰传回 0
export const leapMonth = (y: number) => {
  return lunarInfo[y - 1900] & 0xf;
};

//= === 传回农历 year年month月的总天数
export const monthDays = (y: number, m: number) => {
  return lunarInfo[y - 1900] & (0x10000 >> m) ? 30 : 29;
};

//= === 传入 offset 传回干支, 0=甲子
export const cyclical = (num: number) => {
  return Gan[num % 10] + Zhi[num % 12];
};

//= === 中文日期 m为传入月份，d为传入日期
export const cDay = (m: number, d: number) => {
  // 农历中文月
  let lunarMonthCn;
  // 农历中文日
  let lunarDayCn;
  if (m > 10) {
    lunarMonthCn = '十' + cnStr1[m - 10];
  } else {
    lunarMonthCn = cnStr1[m];
  }
  lunarMonthCn += '月';

  switch (d) {
    case 10:
      lunarDayCn = '初十';
      break;
    case 20:
      lunarDayCn = '二十';
      break;
    case 30:
      lunarDayCn = '三十';
      break;
    default:
      lunarDayCn = cnStr2[Math.floor(d / 10)] + cnStr1[d % 10];
  }
  return {
    lunarMonthCn,
    lunarDayCn,
  };
};
