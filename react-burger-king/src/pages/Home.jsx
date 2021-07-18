import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { BurgerFood, Categories } from '../components'
import LoadingBlock from '../components/BurgerFood/LoadingBlock'
import { getBurgerFood, setBurgerFood, setIsError, setIsLoading } from '../redux/actions/burger-food'
import { addFoodCart, getAddFoodCart } from '../redux/actions/cart'

const categotyName = ['Новинки', 'Кинг Комбо', 'Кинг Бокс 5в1', 'Бургеры из говядины', 'Бургеры из курицы и рыбы', 
                      'Креветки', 'Роллы', 'Картошка', 'Закуски', 'Напитки']

const Home = () => {

  const cartItems = useSelector(({ cart }) => cart.cartItems)
  const {items, isLoading, isError} = useSelector(({ burgerFood }) => burgerFood)
  const addedFood = Object.keys(cartItems).map(key => cartItems[key].items[0])

  const dispatch = useDispatch()
  
  
  const onAddedToCart = async (obj) => {
    const findItem =  addedFood.find(item => item.parentId === obj.parentId)
    if(findItem){
      const {data} = await axios.put(`/api/cart/add/${obj.parentId}`)
      dispatch(addFoodCart(data))
    }else{
      const {data} = await axios.post('/api/cart/add', obj)
      dispatch(addFoodCart(data))
    }
    // const {data} = await axios.post('https://60e0bf126b689e001788cbb0.mockapi.io/cart', obj)
    // const objData = {...obj, id: data.id}
    // console.log(objData)
    // dispatch(addFoodCart(objData, data.parentId))
  }

  React.useEffect(() => {
    dispatch(getBurgerFood())
    dispatch(getAddFoodCart())
  }, [dispatch])

  // React.useEffect(() => {
  //   async function fetchData(){
  //     try{
  //       dispatch(setIsLoading(true))
  //       const [cartResponse, itemsResponse] = await Promise.all([
  //         axios.get('https://60e0bf126b689e001788cbb0.mockapi.io/cart'),
  //         axios.get(`https://60e0bf126b689e001788cbb0.mockapi.io/items`)
  //       ])

  //       cartResponse.data.map(data => dispatch(addFoodCart(data)))
  //       dispatch(setBurgerFood(itemsResponse.data))

  //     }catch(error){
  //       dispatch(setIsError(true))
  //       dispatch(setIsLoading(false))
  //       console.error(error)
  //     }
  //   }

  //   fetchData()
  // }, [dispatch])
  

  return <div>
    <div className='content__top'>
      <div className='container'>
        <Categories  items={categotyName}  />
      </div>
    </div>
    <div className="content__wrap">
      <div className="container">
        <div className='content__main'>
        {
          isError
            ? <h1>Произошла ошибка! Пожалуйста обновите страницу!</h1>
            :  categotyName.map((item, index) => <div key={`${item}_${index}`} className='menu__item'  id={item}>
            <h2 className='content__title'>{item}</h2>
            <div className='content__items'>
            {
              !isLoading 
                ? items.map(item => index === item.category 
                    ? <BurgerFood
                        addedCount={cartItems[item.id] && cartItems[item.id].totalCount}
                        onAddedToCart={onAddedToCart} 
                        key={item.id} 
                        {...item} /> 
                    : null )
                : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
            }
            </div>
          </div>)
          }
        </div>
      </div>
    </div>
  </div>
}

export default Home
