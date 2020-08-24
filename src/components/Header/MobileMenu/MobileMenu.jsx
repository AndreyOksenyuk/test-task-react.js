import React, { useState } from 'react';
import style from './MobileMenu.module.scss'
import burgerSvg from '../../../assets/img/menu-icon.svg'
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import LogoHeader from '../logo';
import MobileNavLink from './MobileNavLink';

const MobileMenu = () => {
   const [visibleMenu, setVisibleMenu] = useState(false)

   const onShowMenu = () => {
      setVisibleMenu(!visibleMenu)
   }
   const onCloseMenu = () => {
      setVisibleMenu(false)
   }
   return (
      <>
         <Drawer
            title={<LogoHeader />}
            placement="left"
            closable={false}
            onClose={onCloseMenu}
            visible={visibleMenu}
            key="left"
            width='290'
            headerStyle={{ padding: '8px 15px 5px' }}
            bodyStyle={{ padding: '26px 0 0 0' }}
         >
            <MobileNavLink />
         </Drawer>
         <img src={burgerSvg} alt="" className={style.burger_btn} onClick={onShowMenu} />
      </>
   );
}

export default MobileMenu;
