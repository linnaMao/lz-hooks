import * as React from 'react';
import { IProps } from '../type';
declare type TMode = 'multiple' | 'tags';
interface ISelectProps extends IProps {
  options: any[];
  mode?: TMode;
}
declare const Select: React.FC<ISelectProps>;
export default Select;
