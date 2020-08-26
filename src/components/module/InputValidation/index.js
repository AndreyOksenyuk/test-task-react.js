import React from 'react';
import style from './InputValidation.module.scss';
import { Input } from 'antd';

const InputValidation = React.memo(({ input, meta, AssistiveText, ...props }) => {

   return (
      <div className={style.input_wrapper}>
         <Input {...input} {...props}
            className={((meta.touched && meta.error) || (meta.touched && !meta.dirty))
               ? style.inputNovalid : null}

         />
         {
            (meta.touched && meta.error)
               ? <p className={style.errorMessage}>{meta.error}</p>
               : <p className={style.AssistiveText}>{AssistiveText}</p>
         }
         {
            (meta.touched && !meta.dirty) &&
            <p className={style.errorMessage}>Еhe field must not be empty</p>
         }

      </div>
   );
})

export default InputValidation;
