import React from 'react';
import { Input } from 'antd';

const InputComponent = ({ input, meta, ...props }) => {
   return (
      <>
         <Input {...input} {...props}/>
      </>
   );
}

export default InputComponent;
