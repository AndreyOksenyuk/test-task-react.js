import React, { useEffect } from 'react';
import style from './InputValidation.module.scss';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setIsValidPhotoInputAC } from '../../../redux/app-reducer';

const InputValidation = React.memo(({ input, meta, AssistiveText, ...props }) => {
   const dispatch = useDispatch()
   const validator = meta.touched && meta.error

   //Setting values for checking the input image
   useEffect(() => {
      dispatch(setIsValidPhotoInputAC(meta.touched))
   }, [meta.touched, dispatch])

   return (
      <div className={style.input_wrapper}>
         <Input {...input} {...props}
            className={validator ? style.inputNovalid : null}
         />
         {
            validator
               ? <p className={style.errorMessage}>{meta.error}</p>
               : <p className={style.AssistiveText}>{AssistiveText}</p>
         }


      </div>
   );
})

export default InputValidation;
