import React from 'react';
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <nav className={style.nav}>
         <ul className={style.nav__link}>
            <NavLink to='/aboutMe' activeClassName={style.activeLink}><li>About me</li></NavLink>
            <NavLink to='/relationships' activeClassName={style.activeLink}><li>Relationships</li></NavLink>
            <NavLink to="/requirements" activeClassName={style.activeLink}><li>Requirements</li></NavLink>
            <NavLink to="/users" activeClassName={style.activeLink}><li>Users</li></NavLink>
            <NavLink to="/signUp" activeClassName={style.activeLink}><li>Sign Up</li></NavLink>
         </ul>
      </nav>
   );
}

export default Nav;
