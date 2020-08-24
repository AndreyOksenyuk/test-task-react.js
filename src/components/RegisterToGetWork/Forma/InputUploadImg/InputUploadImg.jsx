import React, { useRef } from 'react';
import style from './InputUploadImg.module.scss'
import { useDispatch } from 'react-redux';
import { setImgFail } from '../../../../redux/app-reducer';

const InputUploadImg = () => {
   const dispatch = useDispatch()
   let inputRef = useRef()

   let onChange = (e) => {
      dispatch(setImgFail(e.target.files[0])) 
      inputRef.current.setAttribute("data-text", e.target.files[0].name)
   }

   return (
      <div className={style.file_upload_wrapper} data-text="Upload your photo" ref={inputRef}>
         <input
            id='inputPhoto'
            name="file-upload-field" 
            type="file" 
            className={style.file_upload_field} 
            value="" 
            onChange={onChange}
         />
      </div>
   );
}

export default InputUploadImg;
