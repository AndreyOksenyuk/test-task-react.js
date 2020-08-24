import React from 'react';
import style from './MobileMenu.module.scss'
import { NavLink } from 'react-router-dom';

const MobileNavLink = () => {
   return (
      <div className={style.mobileMenu__nav}>
         <ul className={style.mobileMenu__nav_link}>
            <NavLink to="/aboutMe" activeClassName={style.activeLink}><li>About me</li></NavLink>
            <NavLink to="/relationships" activeClassName={style.activeLink}><li>Relationships</li></NavLink>
            <NavLink to="/users" activeClassName={style.activeLink}><li>Users</li></NavLink>
            <NavLink to="/signUp" activeClassName={style.activeLink}><li>Sign Up</li></NavLink>
            <NavLink to="/terms-and-conditions" activeClassName={style.activeLink}><li>Terms and Conditions</li></NavLink>
         </ul>
         <ul className={style.mobileMenu__nav_link}>
            <NavLink to="/how-it-works" activeClassName={style.activeLink}><li>How it works</li></NavLink>
            <NavLink to="/partnership" activeClassName={style.activeLink}><li>Partnership</li></NavLink>
            <NavLink to="/help" activeClassName={style.activeLink}><li>Help</li></NavLink>
            <NavLink to="/leave-testimonial" activeClassName={style.activeLink}><li>Leave testimonial</li></NavLink>
            <NavLink to="/contact-us" activeClassName={style.activeLink}><li>Contact us</li></NavLink>
         </ul>
         <ul className={style.mobileMenu__nav_link}>
            <NavLink to="/articles" activeClassName={style.activeLink}><li>Articles</li></NavLink>
            <NavLink to="/our-news" activeClassName={style.activeLink}><li>Our news</li></NavLink>
            <NavLink to="/testimonials" activeClassName={style.activeLink}><li>Testimonials</li></NavLink>
            <NavLink to="/licenses" activeClassName={style.activeLink}><li>Licenses</li></NavLink>
            <NavLink to="/privacy-policy" activeClassName={style.activeLink}><li>Privacy Policy</li></NavLink>
         </ul>
      </div>
   );
}

export default MobileNavLink;
