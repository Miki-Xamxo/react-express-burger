import { SET_CATEGORY } from "../actions/filter"

const initialState = {
  category: 0
}


const filter = (state = initialState, action) => {
  switch(action.type){
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    default:
    return state
  }
}

export default filter