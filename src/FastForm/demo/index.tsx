import * as React from 'react';
import { FastForm } from 'lz-hooks';

const Index: React.FC = () => {
  const typeArr = [
    {
      cn: '姓名',
      value: 'name',
      rules: [
        {
          required: true,
          message: '请输入姓名',
        },
      ],
      type: 'input',
    },
    {
      cn: '年龄',
      value: 'age',
      rules: [
        {
          required: true,
          type: 'number',
          min: 0,
          max: 100,
        },
      ],
      type: 'number',
    },
    {
      cn: '性别',
      value: 'sex',
      rules: [],
      componentProps: {
        options: [
          {
            value: '男',
          },
          {
            value: '女',
          },
        ],
      },
      type: 'radio',
    },
    {
      cn: '出生日期',
      value: 'birthday',
      rules: [],
      type: 'datePicker',
    },
    {
      cn: '国际',
      value: 'nation',
      componentProps: {
        options: ['中国', '美国', '英国', '韩国', '法国'],
      },
      rules: [],
      type: 'select',
    },
    {
      cn: '兴趣',
      value: 'interest',
      componentProps: {
        options: ['打篮球', '踢足球', '打排球', '打羽毛球', '看书'],
        mode: 'multiple',
      },
      rules: [],
      type: 'select',
    },
    // {
    //   cn: '简历',
    //   value: 'resume',
    //   rules: [],
    //   type: 'textArea',
    // },
  ];

  const defaultValue = {
    name: 'haha',
    age: 18,
    sex: '男',
    birthday: '2020-01-01',
    resume: '我是haha',
    nation: '中国',
    interest: ['打篮球'],
  };

  return (
    <>
      <FastForm defaultValue={defaultValue} typeArr={typeArr} />
    </>
  );
};

export default Index;
