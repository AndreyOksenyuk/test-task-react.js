import { getQuery } from "../api"

const SET_POSITIONS_VALUE = 'app-reducer/SET_POSITIONS_VALUE'
const SET_TOKEN = 'app-reducer/SET_TOKEN'
const SET_IMG_FILE = 'app-reducer/SET_IMG_FILE'
const SET_IS_VALID_PHOTO_INPUT = 'app-reducer/SET_IS_VALID_PHOTO_INPUT'

let initialState = {
   positions: null,
   imgFile: null,
   isValidPhotoInput: false,
   token: null,
}

const App_reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_POSITIONS_VALUE:
         return {
            ...state,
            positions: action.value,
         }
      case SET_TOKEN:
         return {
            ...state,
            token: action.token,
         }
      case SET_IMG_FILE:
         return {
            ...state,
            imgFile: action.img,
         }
      case SET_IS_VALID_PHOTO_INPUT:
         return {
            ...state,
            isValidPhotoInput: action.boolean,
         }
      default:
         return state
   }
}

const setPositionsAC = (value) => ({
   type: SET_POSITIONS_VALUE,
   value
})

const setTokenAC = (token) => ({
   type: SET_TOKEN,
   token
})

export const setImgFailAC = (img) => ({
   type: SET_IMG_FILE,
   img
})

export const setIsValidPhotoInputAC = (boolean) => ({
   type: SET_IS_VALID_PHOTO_INPUT,
   boolean
})


export const setPositionsTC = (params) => (dispatch) => {
   getQuery(params).then(data => {
      if (data.success) {
         dispatch(setPositionsAC(data.positions))
      }
   })
      .catch(error => console.error(error))
}

export const setTokenTC = (params) => dispatch => {
   getQuery(params).then(data => {
      if (data.success) {
         dispatch(setTokenAC(data.token))
      }
   })
      .catch(error => console.error(error))
}

export default App_reducer;