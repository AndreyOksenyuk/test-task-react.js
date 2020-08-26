import React from 'react';
import style from './RegisterToGetWork.module.scss'
import 'antd/dist/antd.css';
import Forma from './Forma/Forma';
import { useSelector, useDispatch } from 'react-redux';
import TitleAndSubtitle from '../TitleAndSubtitle';
import { postMyDataTC } from '../../redux/users-reducer';

const RegisterToGetWork = () => {
   const dispatch = useDispatch()
   const imgFile = useSelector(state => state.app.imgFile)
   const token = useSelector(state => state.app.token)

   const onSubmit = (value) => {
      value.position_id = +value.position_id
      if (imgFile !== null) {
         value.photo = imgFile 
         dispatch(postMyDataTC(value, token))
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
