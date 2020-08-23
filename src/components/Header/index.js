import React, { useState } from 'react';
import style from './Header.module.scss'

import burgerSvg from '../../assets/img/menu-icon.svg'
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import LogoHeader from './logo';



const Header = () => {
   const [visibleMenu, setVisibleMenu] = useState(false)

   const onShowMenu = () => {
      setVisibleMenu(!visibleMenu)
   }
   const onCloseMenu = () => {
      setVisibleMenu(false)
   }

   return (
      <div className={style.headerWrapper}>
         <div className="container">
            <header className={style.header}>
               <LogoHeader />
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
               <Drawer
                  title={<LogoHeader />}
                  placement="left"
                  closable={false}
                  onClose={onCloseMenu}
                  visible={visibleMenu}
                  key="left"
                  width='290'
                  headerStyle={{padding: '8px 15px 0'}}
                  bodyStyle={{ padding: '32px 0 0 0' }}
                  
               >
                  <div className={style.mobileMenu__nav}>
                     <ul className={style.mobileMenu__nav_link}>
                        <a href="/"><li>About me</li></a>
                        <a href="/"><li>Relationships</li></a>
                        <a href="/"><li>Users</li></a>
                        <a href="/"><li>Sign Up</li></a>
                        <a href="/"><li>Terms and Conditions</li></a>
                     </ul>
                     <ul className={style.mobileMenu__nav_link}>
                        <a href="/"><li>How it works</li></a>
                        <a href="/"><li>Partnership</li></a>
                        <a href="/"><li>Help</li></a>
                        <a href="/"><li>Leave testimonial</li></a>
                        <a href="/"><li>Contact us</li></a>
                     </ul>
                     <ul className={style.mobileMenu__nav_link}>
                        <a href="/"><li>Articles</li></a>
                        <a href="/"><li>Our news</li></a>
                        <a href="/"><li>Testimonials</li></a>
                        <a href="/"><li>Licenses</li></a>
                        <a href="/"><li>Privacy Policy</li></a>
                     </ul>
                  </div>
               </Drawer>
               <img src={burgerSvg} alt="" className={style.burger_btn} onClick={onShowMenu}/>
            </header>

         </div>
      </div>
   );
}

export default Header;
