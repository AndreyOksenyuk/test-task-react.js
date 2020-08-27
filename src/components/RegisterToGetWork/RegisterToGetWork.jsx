import React from 'react';
import style from './RegisterToGetWork.module.scss'
import 'antd/dist/antd.css';
import Forma from './Forma/Forma';
import TitleAndSubtitle from '../TitleAndSubtitle';

const RegisterToGetWork = ({ imgFile, token, postMyDataTC, countUsers, page, ...props }) => {


   const onSubmit = (value) => {
      value.position_id = +value.position_id
      if (imgFile !== null) {
         value.photo = imgFile
         postMyDataTC(value, token, page, countUsers)
      }
      else {
         props.setIsValidPhotoInputAC(true)
      }
   }
   return (
      <div className="container">
         <div className={style.form__wrapper} id="register">
            <TitleAndSubtitle
               id="form_title"
               title="Register to get a work"
               subtitle="Attention! After successful registration and alert,
               update the list of users in the block from the top"
            />

            <Forma onSubmit={onSubmit} />

         </div>
      </div>
   );
}

export default RegisterToGetWork;
