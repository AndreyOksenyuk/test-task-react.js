import React from 'react';
import style from './Header.module.scss'
import logo1x from '../../assets/img/favicon-16x16.png';
import logo2x from '../../assets/img/favicon-32x32.png';

const LogoHeader = () => {
   return (
      <div className={style.header__logo}>
         <img src={logo1x} srcSet={logo2x} alt='logo' />
         <h1>testtask</h1>
      </div>
   );
}

export default LogoHeader;
