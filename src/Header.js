import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className="headerLogo" alt="headerLogo"
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <div className="header_search">
                <input className="header__searchInput" type="text" />
                <img className="header__SearchIcon" alt="header__SearchIcon"
                src="https://www.freeiconspng.com/uploads/search-icon-png-5.png" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign in
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineThree'>
                        Returns
                    </span>
                    <span className='header__optionLineFour'>
                        Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineFive'>
                        Your
                    </span>
                    <span className='header__optionLineSix'>
                        Prime
                    </span>
                </div>
                <div className="header__optionBasket">
                    <img className="header__optionBasketimg"
                    src="https://img.icons8.com/dusk/344/shopping-basket.png" />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    );
}

export default Header
