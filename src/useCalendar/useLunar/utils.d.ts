export declare const lYearDays: (y: number) => number;
export declare const leapDays: (y: number) => 0 | 30 | 29;
export declare const leapMonth: (y: number) => number;
export declare const monthDays: (y: number, m: number) => 30 | 29;
export declare const cyclical: (num: number) => string;
export declare const cDay: (
  m: number,
  d: number,
) => {
  lunarMonthCn: string;
  lunarDayCn: string;
};
