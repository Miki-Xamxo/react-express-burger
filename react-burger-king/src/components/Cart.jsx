import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clearCart, minusCartItem, plusCartItem, removeCartItem } from '../redux/actions/cart'
import {CartItem, Button, CartEmpty } from './index.js'

const Cart = () => {

    const {cartItems, totalCount, totalPrice} =  useSelector(({cart}) => cart)


    const addedFood = Object.keys(cartItems).map(key => cartItems[key].items[0])


    const dispatch = useDispatch()

    const onClearCart = async () => {
        if(window.confirm('Вы действительно хотите очистить корзину?')){
            axios.delete('/api/cart/delete')
            dispatch(clearCart())
        }
    }
    
    const onRemoveItem = React.useCallback((parentId) => {
        axios.delete(`/api/cart/delete/${parentId}`)
        // axios.delete(`https://60e0bf126b689e001788cbb0.mockapi.io/cart/${id}`)
        dispatch(removeCartItem(parentId))
    }, [dispatch])
    
    const onPlusItem = React.useCallback(async (id) => {
        await axios.put(`/api/cart/add/${id}`)
        dispatch(plusCartItem(id))
    }, [dispatch])
    
    const onMinusItem = React.useCallback( async (id, totalCount) => {
        if(totalCount > 1){
            await axios.put(`/api/cart/remove/${id}`)
            dispatch(minusCartItem(id))
        }else{
            axios.delete(`/api/cart/delete/${id}`)
            dispatch(removeCartItem(id))
        }
    }, [dispatch])
    

    return (
            <div className='cart'>
                {
                    totalCount 
                        ? <div id='cart__content'>
                        <div className='cart__top'>
                            <div className='cart__header'>
                                <h2 className='cart__header-title'>Корзина</h2>
                                <span className='cart__header-count'>({totalCount})</span>
                            </div>
                            <div onClick={onClearCart} className='cart__clear'>
                                <span>Очистить</span>
                            </div>
                        </div>
                        <div className='cart__content-items'>
                            {
                                addedFood.map(item => 
                                    <CartItem
                                        key={item.id}
                                        totalCount={cartItems[item.parentId].totalCount}
                                        totalPrice={cartItems[item.parentId].totalPrice}
                                        onRemoveItem={onRemoveItem}
                                        onPlusItem={onPlusItem}
                                        onMinusItem={onMinusItem}
                                        {...item}
                                    />
                                )
                            }
                        </div>
                        <div className='cart__bottom-button'>
                            <Button className="pay-btn">
                                <span>Оплатить сейчас</span>
                                <span>{ totalPrice } ₽</span>
                            </Button>
                        </div>
                    </div>
                        : <CartEmpty />
                }
            </div>
    )
}

export default Cart
