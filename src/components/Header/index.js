import React from 'react';
import style from './Header.module.scss'
import LogoHeader from './logo';
import Nav from './Nav';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
   return (
      <div className={style.headerWrapper}>
         <div className="container">
            <header className={style.header}>
               <LogoHeader />

               <Nav />

               <MobileMenu />
            </header>
         </div>
      </div>
   );
}

export default Header;
