import { combineReducers } from "redux";

import filter from './filter'
import burgerFood from './burger-food'
import cart from './cart'

const rootReducer = combineReducers({
  filter,
  burgerFood,
  cart
})


export default rootReducer