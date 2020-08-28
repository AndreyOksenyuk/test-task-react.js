import React from 'react';
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <nav className={style.nav}>
         <div className={style.nav__link}>
            <NavLink to='/aboutMe' activeClassName={style.activeLink}>About me</NavLink>
            <NavLink to='/relationships' activeClassName={style.activeLink}>Relationships</NavLink>
            <NavLink to="/requirements" activeClassName={style.activeLink}>Requirements</NavLink>
            <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink>
            <NavLink to="/signUp" activeClassName={style.activeLink}>Sign Up</NavLink>
         </div>
      </nav>
   );
}

export default Nav;
