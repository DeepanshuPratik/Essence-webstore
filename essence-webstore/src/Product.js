import React from 'react'
import "./Product.css"

function Product({title, image, price ,rating}) {
  const [{basket},dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch item into data layer
      
  }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_,i)=> (
                  <p>⭐</p>
                ))}
            </div>
        </div>
        <img src ={image}/>
        <button onClick={addToBasket}>Add to Your Cart</button>
    </div>
  )
}

export default Product