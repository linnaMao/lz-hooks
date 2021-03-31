declare const useLunar: (
  gy: number,
  gm: number,
  gd: number,
) => {
  lunarYear: number;
  lunarMonth: number;
  lunarDay: number;
  lunarYearCn: string;
  lunarMonthCn: string;
  lunarDayCn: string;
  zodiacYear: string;
  isLeap: boolean;
  leap: number;
  yearCyl: number;
  dayCyl: number;
  monCyl: number;
};
export default useLunar;
