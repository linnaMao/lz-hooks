import * as React from 'react';
declare type TDefaultValue = {
  cn: string;
  value: string;
  rules?: any[];
  componentProps?: any;
  type: string;
  [propName: string]: any;
};
interface IFastFormProps {
  defaultValue: any;
  typeArr: TDefaultValue[];
}
declare const FastForm: React.FC<IFastFormProps>;
export default FastForm;
