import React from 'react';
import style from './TitleAndSubtitle.module.scss'
import 'antd/dist/antd.css';
import { Tooltip } from 'antd';

const TitleAndSubtitle = React.memo(({ title = null, subtitle = null, id }) => {
   return (
      <div className={style.titleAndSubtitle} id={id}>
         {
            title !== null &&
            <Tooltip placement="bottom" title={title}>
               <h3 className={style.title}>{title}</h3>
            </Tooltip>
         }
         {
            subtitle !== null &&
            <Tooltip placement="bottom" title={subtitle} >
               <h4 className={style.subTitle} >{subtitle}</h4>
            </Tooltip>
         }
      </div>
   );
})

export default TitleAndSubtitle;
