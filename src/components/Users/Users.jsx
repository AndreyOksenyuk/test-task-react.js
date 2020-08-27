import React from 'react';
import style from './Users.module.scss'
import { LoadingOutlined } from '@ant-design/icons'
import ButtonMein from '../Button';
import TitleAndSubtitle from '../TitleAndSubtitle';
import UserCard from './UserCard';

const Users = (props) => {

   const onShowMore = () => {
      if (props.naxtLink) {
         props.getNewBatchOfUsers(props.naxtLink)
      }
   }

   return (
      <div className={style.users}>
         <div className="container">
            <TitleAndSubtitle
               id="users_title"
               title='Our cheerful users'
               subtitle='Attention! Sorting users by registration date'
            />
            {props.statusError && <h3 className={style.errorMessage}>Something went wrong!!!</h3>}
            {props.showPreloader
               ? <div className={style.users_wrapper}>
                  <LoadingOutlined style={{ fontSize: '40px' }} />
               </div>
               : <div className={style.users_wrapper}>

                  <UserCard users={props.users} />
                  {props.naxtLink !== null &&
                     <div className={style.btn_users} onClick={onShowMore}>
                        <ButtonMein
                           text={'Show more'}
                           tag='button'
                           disable={props.disableBtn}
                        />
                     </div>
                  }
               </div>

            }

         </div>
      </div>
   );
}

export default Users;
