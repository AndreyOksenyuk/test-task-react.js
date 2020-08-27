import React from 'react';
import style from './UserCard.module.scss'
import 'antd/dist/antd.css';
import { Tooltip } from 'antd';
import userWithoutAvatar from '../../../assets/img/photo-cover.svg'

const UserCard = ({ users }) => {

   return (
      <div className={style.users__container}>
         {
            users.map((user, i) => {
   
               return (
                  <div className={style.user} key={"" + user.id + i}>
                     <img
                        src={/.png$/.test(user.photo)
                           ? userWithoutAvatar
                           : user.photo
                        }
                        alt=""
                     />
                     <Tooltip placement="bottom" title={user.name}>
                        <h4 className={style.userName}>{user.name}</h4>
                     </Tooltip>

                     <p className={style.position}>{user.position}</p>
                     <Tooltip placement="bottom" title={user.email}>
                        <p className={style.email}>{user.email}</p>
                     </Tooltip>
                     <p className={style.phone}>{user.phone}</p>
                  </div>
               )
            })

         }

      </div>
   );
}

export default UserCard;
