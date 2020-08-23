import React from 'react';
import style from './Button.module.scss'

const ButtonMein = ({text}) => {
   return (
      <>
         <button className={style.btn}>{text}</button>
      </>
   );
}

export default ButtonMein;
