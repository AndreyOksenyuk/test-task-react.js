import React from 'react';
import RegisterToGetWork from './RegisterToGetWork';
import { connect } from 'react-redux';
import { postMyDataTC } from '../../redux/users-reducer'
import { setIsValidPhotoInputAC } from '../../redux/app-reducer'

const RegisterToGetWorkContainer = (props) => {
   return <RegisterToGetWork {...props} />
}

const mapStateToProps = (state) => ({
   imgFile: state.app.imgFile,
   token: state.app.token,
   page: state.user.page,
   countUsers: state.user.countUsers,
})

let RegisterToGetWorkConnect = connect(mapStateToProps, {
   postMyDataTC, setIsValidPhotoInputAC
})(RegisterToGetWorkContainer)

export default RegisterToGetWorkConnect;
