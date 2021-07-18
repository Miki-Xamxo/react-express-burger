import React from 'react'

import PropTypes from 'prop-types'

const CartItem = React.memo(({id, parentId, imageUrl,  name, onRemoveItem, onMinusItem, onPlusItem, totalCount, totalPrice}) => {

  return (
    <div key={id} className='cart__item'>
      <img className='cart__item-img' src={imageUrl} alt="" />
      <div className='cart__item-wrap'>
        <div className='cart__item-info'>
          <span>{name}</span>
          <div onClick={() => onRemoveItem(parentId)} className='btn--remove'>
            <svg width='16' height='16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="close">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5918 0L-8.96454e-05 1.59189L6.40802 8L-8.96454e-05 14.4081L1.5918 16L9.5918 8L1.5918 0Z"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.4082 0L16.0001 1.59189L9.59198 8L16.0001 14.4081L14.4082 16L6.4082 8L14.4082 0Z"></path>
            </svg>
          </div>
        </div>
        <div className='cart__item-total'>
          <div className='cart__item-count'>
            <div onClick={() => onMinusItem(parentId, totalCount)} className="button button--outline button--circle cart__item-count-minus">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"></path>
              </svg>
            </div>
            <b>{totalCount}</b>
            <div onClick={() => onPlusItem(parentId)} className="button button--outline button--circle cart__item-count-plus">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"></path><path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"></path>
              </svg>
            </div>
          </div>
          <div className='cart__item-price'>
            <b>{totalPrice} ₽</b>
          </div>
        </div>
      </div>
    </div>
  )
})

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  parentId:PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,  
  name: PropTypes.string.isRequired, 
  onRemoveItem: PropTypes.func.isRequired, 
  onMinusItem: PropTypes.func.isRequired, 
  onPlusItem: PropTypes.func.isRequired, 
  totalCount: PropTypes.number.isRequired, 
  totalPrice: PropTypes.number.isRequired 
}

export default CartItem
