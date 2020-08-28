import React, { useRef } from 'react';
import style from './InputUploadImg.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setImgFailAC } from '../../../../redux/app-reducer';


let InputUploadImg = React.memo(() => {
   const isValidPhotoInput = useSelector(state => state.app.isValidPhotoInput)
   const dispatch = useDispatch()
   const inputRef = useRef()
   const imgRef = useRef()


   const onChange = (element) => {
      const styleNoValidInputImg = () => {
         inputRef.current.style.borderColor = '#dc3545'
         inputRef.current.style.boxShadow = '0px 0px 4px #dc3545'
      }
      const styleValidInputImg = () => {
         inputRef.current.style.borderColor = '#ced4da'
         inputRef.current.style.boxShadow = 'none'
      }

      inputRef.current.setAttribute("data-text", 'Downloads...')
      //Uploading an image to the <img> tag to find out the size of this image
      const imgTag = imgRef.current;
      const file = element.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
         imgTag.src = reader.result;
      }
      reader.onloadend = () => {
         imgTag.src = reader.result;
      }

      if (file) {
         reader.readAsDataURL(file);
      } else {
         imgTag.src = "";
      }

      //validation of the uploaded image
      setTimeout(() => {
         if (imgTag.clientWidth < 70 && imgTag.clientHeight < 70) {
            styleNoValidInputImg()
            inputRef.current.setAttribute("data-text", 'Minimum size of photo 70 X 70px.')
         }
         else if (file.size > 5242880) {
            styleNoValidInputImg()
            inputRef.current.setAttribute("data-text", 'The photo size must not be greater than 5 Mb.')
         }
         else {
            dispatch(setImgFailAC(file))
            inputRef.current.setAttribute("data-text", file.name)
            styleValidInputImg()
         }
      }, 1000);

   }

   return (
      <div className={style.file_upload_wrapper}
         data-text="Upload your photo"
         ref={inputRef}
         style={isValidPhotoInput 
         ? { borderColor: '#dc3545', boxShadow: '0px 0px 4px #dc3545' } 
         : { borderColor: '#ced4da'}}
      >
      
         <div className={style.imageHide}>
            <img src='' alt="img" ref={imgRef} />
         </div>
         <input
            id='inputPhoto'
            name="file-upload-field"
            type="file"
            accept='image/jpeg, image/jpg'
            className={style.file_upload_field}
            value=""
            onChange={onChange}
         />
      </div>
   );
})

export default InputUploadImg;
