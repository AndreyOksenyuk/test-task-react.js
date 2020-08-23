import React from 'react';
import style from './Banner.module.scss'
import ButtonMein from '../Button';

const Banner = () => {
   return (
      <div className={style.banner}>
         <div className="container">
            <div className={style.banner__inner}>
               <h3 className={style.banner__inner_title}>Test assignment for Frontend
              Developer position</h3>
               <p className={style.banner__inner_text}>We kindly remind you that your test
               assignment should be submitted as a link to github/bitbucket repository.
               Please be patient, we consider and respond to every application that meets
               minimum requirements. We look forward to your submission. Good luck!
              The photo has to scale in the banner area on the different screens</p>
               <p className={style.banner__inner_text_mobile}>We kindly remind you that your test
            assignment should be submitted as a link to github/bitbucket repository.</p>
            </div>
            <div className={style.btn_baner}>
               <ButtonMein text={'Sing up now'} />
            </div>
         </div>
      </div>
   );
}

export default Banner;
