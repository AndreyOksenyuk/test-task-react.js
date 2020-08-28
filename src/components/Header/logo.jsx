import React from 'react';
import style from './Header.module.scss'

const LogoHeader = () => {
   return (
      <div className={style.header__logo}>
         <img src={require('../../assets/img/favicon-16x16.png')} 
            srcSet={require('../../assets/img/favicon-32x32.png')} alt='logo' 
         />
         <h1>testtask</h1>
      </div>
   );
}

export default LogoHeader;
