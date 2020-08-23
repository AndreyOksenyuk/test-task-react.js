import React from 'react';
import style from './Form.module.scss'
import 'antd/dist/antd.css';
import ButtonMein from '../Button';
import { Input } from 'antd';
import UploadPhot from '../UploadPhoto/UploadPhoto';

const FormModule = () => {
   return (
      <div className="container">
         <div className={style.form__wrapper}>
            <h3 className={style.form__wrapper_title}>Register to get a work</h3>
            <h4 className={style.form__wrapper_subTitle}>Attention! After successful registration and alert,
        update the list of users in the block from the top</h4>
            <form className={style.Form}>
               <label htmlFor="inputName">Name</label>
               <Input placeholder="Your name" id="inputName" />

               <label htmlFor="inputEmail">Email</label>
               <Input placeholder="Your email" id="inputEmail" />

               <label htmlFor="inputPhone">Phone namber</label>
               <Input placeholder="+380 XX XXX XX XX" id="inputPhone" />


               <h6>Select your positio</h6>
               <div className={style.checkBox}>
                  <input id="r1" type="radio" name="radio" value="1" />
                  <label htmlFor="r1">Radio1</label>
               </div>

               <div className={style.checkBox}>
                  <input id="r2" type="radio" name="radio" value="1" />
                  <label htmlFor="r2">Radio2</label>
               </div>

               <div className={style.checkBox}>
                  <input id="r3" type="radio" name="radio" value="1" />
                  <label htmlFor="r3">Radio3</label>
               </div>

               <div className={style.checkBox}>
                  <input id="r4" type="radio" name="radio" value="1" />
                  <label htmlFor="r4">Radio4</label>
               </div>


               <label htmlFor="inputPhoto">Photo</label>
               <Input
                  className={style.inputPhoto}
                  placeholder="Upload your photo"
                  addonAfter={<UploadPhot />}
                  id="inputPhoto"
               />
               <div className={style.btn_formSubmit}>
                  <ButtonMein text={'Singup now'} />
               </div>
            </form>
         </div>
      </div>
   );
}

export default FormModule;
