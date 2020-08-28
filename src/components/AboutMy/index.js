import React from 'react';
import style from './AboutMy.module.scss';
import TitleAndSubtitle from '../TitleAndSubtitle';

const AboutMy = () => {
   return (
      <div className="container">
         <div className={style.aboutMe}>

            <TitleAndSubtitle
               id="aboutMy_title"
               title="Let's get acquainted"
            />

            <div className={style.aboutMe__content}>
               <img src={require('../../assets/img/man-laptop-v1.svg')} alt='man-laptop' className={style.aboutMe__content_img} />
               <div className={style.aboutMe__content_text}>
                  <h4>I am cool frontend developer</h4>
                  <p>We will evaluate how clean your approach to writing CSS and Javascript code is.
              You can use any CSS and Javascript 3rd party libraries without any restriction.</p>

                  <p>If &nbsp;3rd&nbsp; party&nbsp;&nbsp; css/javascript &nbsp;&nbsp;libraries are added to the project via
                  bower/npm/yarn you will get bonus points. If you use any task runner
                  (gulp/webpack) you will get bonus points as well. Slice service
              directory page PSD mockup into HTML5/CSS3.</p>
                  <a href="#register">Sing up now</a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AboutMy;
