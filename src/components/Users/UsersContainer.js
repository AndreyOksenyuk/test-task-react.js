import React, { useEffect } from 'react';
import Users from '.';
import { connect } from 'react-redux';
import { setPositionsTC } from '../../redux/app-reducer'

const UsersContainer = (props) => {

   useEffect(() => {
      props.setPositionsTC('positions')
   })

   return <Users {...props} />
}

const mapStateToProps = (state) =>({

})

const UsersConnect = connect(mapStateToProps, {
   setPositionsTC,
})(UsersContainer)

export default UsersConnect;
