import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <image
            className="header__logo" 
            src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
        /> 
        <div className="header__search">
            <input
                className="header__searchInput"
                type="text"
            />
            {/* Logo */}
        </div>
        <div className="header__nav">
            <div className='header__options'>
                <span className='header__optionLineOne'>Hello Guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>
            <div className='header__options'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            <div className='header__options'>
                <span className='header__optionLineOne'>Hello Guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>
        </div>
    </div>
  )
}

export default Header