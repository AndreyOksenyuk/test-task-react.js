import { getUsers, postMyData } from "../api"

const SET_USERS = 'app-reducer/SET_USERS'
const SET_PAGE_USERS = 'app-reducer/SET_PAGE_USERS'
const SET_NAMBER_COUNT_USERS = 'app-reducer/SET_NAMBER_COUNT_USERS'
const SHOW_MORE_USERS = 'app-reducer/SHOW_MORE_USERS'
const SET_DISABLE_BTN = 'app-reducer/SET_DISABLE_BTN'
const SHOW_MODAL_CONGRATULATION = 'app-reducer/SHOW_MODAL_CONGRATULATION'
const SHOW_PRELOADER = 'app-reducer/SHOW_PRELOADER'
const SET_STATUS_ERROR = 'app-reducer/SET_STATUS_ERROR'
const SET_MESSAGE_ERROR = 'app-reducer/SET_MESSAGE_ERROR'

let initialState = {
   users: [],
   page: 1,
   countUsers: null,
   nextLink: null,
   disableBtn: false,
   showModal: false,
   showPreloader: false,
   statusError: false,
   messageError: '',
}

const Users_reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS:
         return {
            ...state,
            users: action.users,
            nextLink: action.nextLink,
         }
      case SHOW_MORE_USERS:
         return {
            ...state,
            users: action.users ? [...state.users, ...action.users] : state.users,
            nextLink: action.nextLink ? action.nextLink : null,
         }
      case SET_PAGE_USERS:
         return {
            ...state,
            page: action.page
         }
      case SET_NAMBER_COUNT_USERS:
         return {
            ...state,
            countUsers: action.namber
         }
      case SET_DISABLE_BTN:
         return {
            ...state,
            disableBtn: action.boolean
         }
      case SHOW_MODAL_CONGRATULATION:
         return {
            ...state,
            showModal: action.boolean
         }
      case SHOW_PRELOADER:
         return {
            ...state,
            showPreloader: action.boolean
         }
      case SET_STATUS_ERROR:
         return {
            ...state,
            statusError: action.boolean
         }
      case SET_MESSAGE_ERROR:
         return {
            ...state,
            messageError: action.message
         }
      default:
         return state
   }
}

const setUsersAndNextLinkAC = (users, nextLink) => ({
   type: SET_USERS,
   users, nextLink
})

export const setPageUsersAC = (page) => ({
   type: SET_PAGE_USERS,
   page
})

export const setNamberCountUsersAC = (namber) => ({
   type: SET_NAMBER_COUNT_USERS,
   namber
})

const ShowMoreUsersAC = (users, nextLink) => ({
   type: SHOW_MORE_USERS,
   users, nextLink
})

const setDisableBtnAC = (boolean) => ({
   type: SET_DISABLE_BTN,
   boolean
})

export const setShowModalAC = (boolean) => ({
   type: SHOW_MODAL_CONGRATULATION,
   boolean
})
const setShowPreloaderAC = (boolean) => ({
   type: SHOW_PRELOADER,
   boolean
})
const setStatusErrorAC = (boolean) => ({
   type: SET_STATUS_ERROR,
   boolean
})
const setMessageErrorAC = (message) => ({
   type: SET_MESSAGE_ERROR,
   message
})

export const getUsersTC = (page, count) => async (dispatch) => {
   await dispatch(setShowPreloaderAC(true))
   await getUsers(page, count).then(data => {
      if (data.success) {
         dispatch(setStatusErrorAC(false))
         dispatch(setUsersAndNextLinkAC(data.users, data.links.next_url))
      }
   })
      .catch(error => {
         console.error(error)
         dispatch(setStatusErrorAC(true))
      })
   dispatch(setShowPreloaderAC(false))
}


export const getNewBatchOfUsers = (url) => async (dispatch) => {
   await dispatch(setDisableBtnAC(true))
   await getUsers(null, null, url).then(data => {
      if (data.success) {
         dispatch(ShowMoreUsersAC(data.users, data.links.next_url))
      }
      else if (!data.success && data.message === 'Page not found') {
         dispatch(ShowMoreUsersAC(null, null))
      }
   })

   dispatch(setDisableBtnAC(false))
}

export const postMyDataTC = (data, token, page, usersCount) => async (dispatch) => {
   await dispatch(setDisableBtnAC(true))
   await postMyData(data, token).then(response => {

      if (response.ok) {
         dispatch(setShowModalAC(true))
         dispatch(setMessageErrorAC(''))
         dispatch(getUsersTC(page, usersCount))
      }
      else if (!response.ok && response.status === 409) {
         dispatch(setMessageErrorAC('User with this phone or email already exist'))
      }
   })

   await dispatch(setDisableBtnAC(false))
}

export default Users_reducer;