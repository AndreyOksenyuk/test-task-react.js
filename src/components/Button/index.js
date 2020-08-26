import React from 'react';
import style from './Button.module.scss'

const ButtonMein = ({ text, tag, id, link = '/', disable = false }) => {
   return (
      <>
         {
            tag === 'button'
               ? <button
                  className={style.btn}
                  disabled={disable}
                  id={id}
               >{text}</button>

               : <a
                  href={link}
                  className={style.btn}
                  disabled={disable}
                  id={id}
               >{text}</a>
         }
      </>
   );
}

export default ButtonMein;
