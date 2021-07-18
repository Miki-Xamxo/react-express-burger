import axios from "axios"

export const ADD_FOOD_CART = 'ADD_FOOD_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const PLUS_CART_ITEM = 'PLUS_CART_ITEM'
export const MINUS_CART_ITEM = 'MINUS_CART_ITEM'
export const SET_IS_ERROR_CART = 'SET_IS_ERROR_CART'


export const addFoodCart = (objFood) => ({ type: ADD_FOOD_CART, payload: objFood})
export const clearCart = () => ({ type: CLEAR_CART})
export const removeCartItem = (id) => ({ type: REMOVE_CART_ITEM, payload: id })
export const plusCartItem = (id) => ({ type: PLUS_CART_ITEM, payload: id })
export const minusCartItem = (id) => ({ type: MINUS_CART_ITEM, payload: id })
export const setIsErrorCart = (isError) => ({ type: SET_IS_ERROR_CART, payload: isError })

export const getAddFoodCart  = () => async (dispatch) => {
    try{
        const resp = await axios.get('/api/cart')
        // const resp = await axios.get('https://60e0bf126b689e001788cbb0.mockapi.io/cart')
        // resp.data.map(data => console.log(data))
        resp.data.map(data => dispatch(addFoodCart(data)))
    }catch(error){
        dispatch(setIsErrorCart(true))
        console.log(error)
    }
}