import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal({0} items):
                        <strong>{0}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox"/> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value = {0}
            displayType={"text"}
            thousandSeparator = {true}
            prefix = {"RS "}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal