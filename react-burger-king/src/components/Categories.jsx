import React from 'react'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'



const Categories = React.memo(({items}) => {

  return (
    <div className="categories">
        {
          items.map((item, index) => 
            <Link 
              activeClass='active' 
              to={item} spy={true} 
              key={`${item}_${index}`} 
              offset={-200} 
              smooth={true}>
              {item}
            </Link> )
        }
    </div>
  )
})

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Categories
