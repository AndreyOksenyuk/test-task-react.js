import React, { PureComponent } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { setPositionsTC, setTokenTC, } from '../../redux/app-reducer'
import { getUsersTC, setNamberCountUsersAC, getNewBatchOfUsers } from '../../redux/users-reducer'

class UsersContainer extends PureComponent {

   componentDidMount() {

      let queryNamber = async () => {
         let showTheNumberOfUsers = () => {
            if (window.screen.width < 500) {
               this.props.setNamberCountUsersAC(3)
            } else {
               this.props.setNamberCountUsersAC(6)
            }
         }
         await showTheNumberOfUsers()
         await this.props.getUsersTC(this.props.page, this.props.countUsers);
      }
      queryNamber()
      this.props.setPositionsTC('positions')
      this.props.setTokenTC('token')
   }

   render() {
      return <Users {...this.props} />
   }

}

const mapStateToProps = (state) => ({
   page: state.user.page,
   countUsers: state.user.countUsers,
   users: state.user.users,
   naxtLink: state.user.nextLink,
   disableBtn: state.user.disableBtn,
   showPreloader: state.user.showPreloader,
   statusError: state.user.statusError,

})

const UsersConnect = connect(mapStateToProps, {
   setPositionsTC, setTokenTC, getUsersTC,
   setNamberCountUsersAC, getNewBatchOfUsers
})(UsersContainer)

export default UsersConnect;
