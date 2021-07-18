import { SET_BURGER_FOOD, SET_IS_ERROR, SET_IS_LOADING } from "../actions/burger-food"

const initialState = {
  items: [],
  isLoading: false,
  isError: false
}

const burgerFood = (state = initialState , action) => {
  switch(action.type){
    case SET_BURGER_FOOD:
      return {
        ...state,
        items: [...action.payload],
        isLoading: false
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_IS_ERROR:
      return {
        ...state,
        isError: action.payload
      }
    default:
      return state
  }
}

export default burgerFood