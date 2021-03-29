import * as React from 'react';
import { sTermInfo, solarTerm } from '../config';

const useSolarTerm = (gy: number, gm: number, gd: number) => {
  const [solarTerms, setSolarTerms] = React.useState<string>('');

  const getTmp = (v: number) => {
    return new Date(
      31556925974.7 * (gy - 1900) +
        sTermInfo[v] * 60000 +
        Date.UTC(1900, 0, 6, 2, 5),
    );
  };

  let tmp1 = getTmp(gm * 2 + 1);
  let tmp2 = tmp1.getUTCDate();

  if (tmp2 === gd) {
    setSolarTerms(solarTerm[gm * 2 + 1]);
  }

  tmp1 = getTmp(gm * 2);
  tmp2 = tmp1.getUTCDate();

  if (tmp2 === gd) {
    setSolarTerms(solarTerm[gm * 2]);
  }

  return solarTerms;
};

export default useSolarTerm;
