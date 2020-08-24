import { getQuery } from "../api"

const SET_POSITIONS_VALUE = 'app-reducer/SET_POSITIONS_VALUE'
const SET_IMG_FILE = 'app-reducer/SET_IMG_FILE'

let initialState = {
   text: 'textRedux',
   positions: null,
   imgFile: null,
}

const App_reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_POSITIONS_VALUE:
         return{
            ...state,
            positions: action.value,
         }
      case SET_IMG_FILE:
         return{
            ...state,
            imgFile: action.img,
         }
      default:
         return state
   }
}

const setPositionsAC = (value) => ({
   type: SET_POSITIONS_VALUE,
   value
})

export const setImgFail = (img) => ({
   type: SET_IMG_FILE,  
   img
})

export const setPositionsTC = (params) => (dispatch) => {
   getQuery(params).then(data => {
         if(data.success){
            dispatch(setPositionsAC(data.positions))
         }
      })
      .catch(error => console.error(error))
      
}

export default App_reducer;