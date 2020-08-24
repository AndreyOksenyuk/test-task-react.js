import React from 'react';
import style from './RegisterToGetWork.module.scss'
import 'antd/dist/antd.css';
import Forma from './Forma/Forma';
import { useSelector } from 'react-redux';


const RegisterToGetWork = () => {
   const imgFile = useSelector(state => state.app.imgFile)

   const onSubmit = (value) => {
      if (imgFile !== null) {
         value.image = imgFile
      }
      value.position = +value.position
      console.log(value);
   }
   return (
      <div className="container">
         <div className={style.form__wrapper}>
            <h3 className={style.form__wrapper_title}>Register to get a work</h3>
            <h4 className={style.form__wrapper_subTitle}>Attention! After successful registration and alert,
               update the list of users in the block from the top</h4>

            <Forma onSubmit={onSubmit}/>

         </div>
      </div>
   );
}

export default RegisterToGetWork;
