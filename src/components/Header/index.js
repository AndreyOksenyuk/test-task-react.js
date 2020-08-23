import React from 'react';
import style from './Header.module.scss'
import logo1x from '../../assets/img/favicon-16x16.png';
import logo2x from '../../assets/img/favicon-32x32.png';
import burgerSvg from '../../assets/img/menu-icon.svg'

const Header = () => {
   return (
      <div className={style.headerWrapper}>
         <div className="container">
            <header className={style.header}>
               <div className={style.header__logo}>
                  <img src={logo1x} srcSet={logo2x} alt='logo' />
                  <h1>testtask</h1>
               </div>
               <nav className={style.nav}>
                  <ul className={style.nav__link}>
                     <a href="/"><li>About me</li></a>
                     <a href="/"><li>Relationships</li></a>
                     <a href="/"><li>Requirements</li></a>
                     <a href="/"><li>Users</li></a>
                     <a href="/"><li>Sign Up</li></a>
                  </ul>
               </nav>

               {/* mobile menu */}
               <img src={burgerSvg} alt="" className={style.burger_btn} />
            </header>

         </div>
      </div>
   );
}

export default Header;
