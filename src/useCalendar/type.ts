export interface Calendar {
  gregorianYear?: Number; // 公历年
  gregorianMonth?: String; // 公历月
  gregorianDay?: String; // 公历日
  weekday?: String; // 星期
  hours?: String;
  minutes?: String;
  seconds?: String;

  lunarYear?: Number; // 农历年
  lunarMonth?: Number; // 农历月
  lunarDay?: Number; // 农历日

  lunarYearCn?: String; // 农历天干地支纪年
  lunarMonthCn?: String; // 农历中文月
  lunarDayCn?: String; // 农历中文日
  zodiacYear?: String; // 农历生肖年

  solarTerm?: String; // 节气
  gregorianFestival?: String; // 公历节日
  lunarFestival?: String; // 农历节日
}
