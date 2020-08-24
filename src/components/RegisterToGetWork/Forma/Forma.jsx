import React from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import style from '../RegisterToGetWork.module.scss'
import ButtonMein from '../../Button';
import InputComponent from './InputComponent';
import InputUploadImg from './InputUploadImg/InputUploadImg';

let RegisterForma = ({ handleSubmit }) => {
   const positions = useSelector(state => state.app.positions)



   return (
      <form className={style.Form} onSubmit={handleSubmit}>
         <label htmlFor="inputName">Name</label>
         <Field 
            name="name"
            placeholder="Your name" 
            id="inputName" 
            component={InputComponent}
         />

         <label htmlFor="inputEmail">Email</label>
         <Field 
            name="email"
            placeholder="Your email" 
            id="inputEmail" 
            component={InputComponent}
         />

         <label htmlFor="inputPhone">Phone namber</label>
         <Field 
            name="phone"
            placeholder="+380 XX XXX XX XX" 
            id="inputPhone" 
            component={InputComponent}
         />


         <h6>Select your positio</h6>

         {positions !== null &&
            positions.map((e, i) => {
               return (
                  <div className={style.checkBox} key={e.id}>
                     <Field 
                        name="position" 
                        id={e.name} 
                        component={InputComponent}  
                        type="radio"
                        value={i + 1 + ''}     
                     />
                     <label htmlFor={e.name}>{e.name}</label>
                  </div>
               )
            })
         }

         <label htmlFor="inputPhoto">Photo</label>
         <InputUploadImg />

         <div className={style.btn_formSubmit}>
            <ButtonMein text={'Singup now'} />
         </div>
      </form>
   );
}

RegisterForma = reduxForm({
   form: 'register'
})(RegisterForma)

export default RegisterForma;
