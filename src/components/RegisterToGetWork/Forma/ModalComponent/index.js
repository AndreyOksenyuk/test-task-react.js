import React from 'react';
import style from './Modal.module.scss'
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModalAC } from '../../../../redux/users-reducer';
import ButtonMein from '../../../Button';
import SvgClose from './CloseSVG';

const styleTitle = {
   fontSize: '24px',
   fontFamily: 'Open Sans Regular',
   margin: '0'
}

const ModaComponent =React.memo(() => {
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
            title={<h4 style={styleTitle}>Congratulations</h4>}
            closeIcon={<SvgClose />}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            maskClosable={false}
            centered={true}
            width={393}
            bodyStyle={{ padding: '0 16px 15px 16px' }}
         >
            <div className={style.body}>
               <p>You have successfully passed the registration</p>
            </div>
            <div className={style.buttonGread_wrapper} onClick={handleOk}>
               <ButtonMein
                  text='Great'
                  tag='button'
                  id='modal-Btn' //styles with an id in the App.scss file

               />
            </div>

         </Modal>
      </>
   );
})


export default ModaComponent;
