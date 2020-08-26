import React from 'react';
import style from './Modal.module.scss'
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModalAC } from '../../../../redux/users-reducer';
import ButtonMein from '../../../Button';
import SvgClose from './CloseSVG';

const ModaComponent = () => {
   const dispatch = useDispatch()
   let visible = useSelector(state => state.user.showModal)

   const handleOk = () => {
      dispatch(setShowModalAC(false))
   }
   const handleCancel = () => {
      dispatch(setShowModalAC(false))
   }
   return (
      <>
         <Modal
            title={<h4 style={{ fontSize: '24px' }}>Congratulations</h4>}
            closeIcon={<SvgClose />}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            centered={true}
            width={394}
         >
            <div className={style.body}>
               <p>You have successfully passed the registration</p>
            </div>
            <div className={style.buttonGread}>
               <ButtonMein
                  text='Great'
                  tag='button'
                  id='modal-Btn' //styles with an id in the App.scss file
               />
            </div>

         </Modal>
      </>
   );
}


export default ModaComponent;
