import React from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import style from '../RegisterToGetWork.module.scss'
import ButtonMein from '../../Button';
import InputValidation from '../../module/InputValidation';
import InputUploadImg from './InputUploadingImg/InputUploadImg';
import ModaComponent from './ModalComponent'
import { phoneNumber, minLength2, maxLength60, maxLength100, email, required } from '../../utils/Validators';
import RadioInputValidation from '../../module/RadioInputValidation';

let RegisterForma = React.memo(({ handleSubmit }) => {
   const positions = useSelector(state => state.app.positions)
   const disableBtn = useSelector(state => state.user.disableBtn)
   const messageError = useSelector(state => state.user.messageError)

   return (
      <form className={style.Form} onSubmit={handleSubmit}>
         {messageError !== '' && <p className={style.textErrorForm}>{messageError}</p>}
         <label htmlFor="inputName">Name</label>
         <Field 
            name="name"
            placeholder="Your name" 
            id="inputName" 
            component={InputValidation}
            validate={[required, minLength2, maxLength60]}
            
         />

         <label htmlFor="inputEmail">Email</label>
         <Field 
            name="email"
            placeholder="Your email" 
            id="inputEmail" 
            component={InputValidation}
            validate={[required, email, minLength2, maxLength100]}
         />

         <label htmlFor="inputPhone">Phone namber</label>
         <Field 
            name="phone"
            placeholder="+380 XX XXX XX XX" 
            id="inputPhone" 
            component={InputValidation}
            validate={[required, phoneNumber]}
            AssistiveText='Еnter phone number in open format'
         />


         <p>Select your positio</p>

         {positions !== null &&
            positions.map((e, i) => {
               return (
                  <div className={style.checkBox} key={e.id}>
                     <Field 
                        name="position_id" 
                        id={e.name} 
                        component={RadioInputValidation}  
                        type="radio"
                        value={i + 1 + ''}  
                        validate={[required]}   
                     />
                     <label htmlFor={e.name}>{e.name}</label>
                  </div>
               )
            })
         }

         <label htmlFor="inputPhoto">Photo</label>
         <InputUploadImg />

         <div className={style.btn_formSubmit}>
            <ModaComponent />
            <ButtonMein text={'Singup now'} tag='button' disable={disableBtn}/>
         </div>
      </form>
   );
})

RegisterForma = reduxForm({
   form: 'register'
})(RegisterForma)

export default RegisterForma;
