import React from 'react'
import { Button } from '../index'
import PropTypes from 'prop-types'


const BurgerFood = React.memo(({ onAddedToCart, id,  imageUrl, name, price, addedCount }) => {

  const onClickAdd = () => { 
    onAddedToCart({parentId: id, imageUrl, name, price})
  }


  return (
    <div className="burger-food">
      <div className='burger_food-content'>
        <img
          className="burger-food__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="burger-food__title">{name}</h4>
      </div>
      <div className="burger-food__bottom">
        <div className="burger-food__price">{price} ₽</div>
        <Button onClick={onClickAdd} className="button--add" outline>
          {
            !addedCount 
              ? <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
              : <i>{addedCount}</i> 
          }
        </Button>
      </div>
    </div>
  )
})

BurgerFood.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addedCount: PropTypes.number,
  onAddedToCart: PropTypes.func.isRequired
}

export default BurgerFood
