import React from 'react';
import style from './Users.module.scss'
import ButtonMein from '../Button';

const Users = () => {

   return (
      <div className={style.users}>
         <div className="container">
            <h3 className={style.users__title}>Our cheerful users</h3>
            <h4 className={style.users__subTitle}>Attention! Sorting users by registration date</h4>
            <div className={style.users_wrapper}>
               <div className={style.users__container}>
                  <div className={style.user}></div>
                  <div className={style.user}></div>
                  <div className={style.user}></div>
                  <div className={style.user}></div>
                  <div className={style.user}></div>
                  <div className={style.user}></div>
               </div>
               <div className={style.btn_users}>
                  <ButtonMein text={'Show more'} />
               </div>

            </div>

         </div>
      </div>
   );
}

export default Users;
