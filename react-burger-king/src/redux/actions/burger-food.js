import axios from 'axios'

export const SET_BURGER_FOOD = 'SET_BURGER_FOOD'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_IS_ERROR = 'SET_IS_ERROR'

export const setBurgerFood = (items) => ({ type: SET_BURGER_FOOD, payload: items })
export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, payload: isLoading})
export const setIsError = (isError) => ({ type: SET_IS_ERROR, payload: isError  })


export const getBurgerFood = () => async (dispatch) => {
  try{
    dispatch(setIsLoading(true))
    const resp = await  axios.get(`https://60e0bf126b689e001788cbb0.mockapi.io/items`)
    // const resp = await  axios.get(`http://localhost:3003/bk_food`)
    dispatch(setBurgerFood(resp.data))
  }catch(error){
    dispatch(setIsError(true))
    dispatch(setIsLoading(false))
    console.error(error)
  }
}