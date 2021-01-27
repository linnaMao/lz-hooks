import * as React from 'react';
import { IProps } from '../type';
interface IRadioProps extends IProps {
  options: any[];
}
declare const Radio: React.FC<IRadioProps>;
export default Radio;
