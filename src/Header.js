import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
            <img className="headerLogo" alt="headerLogo"
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header_search">
                <input className="header__searchInput" type="text" />
                <img className="header__SearchIcon" alt="header__SearchIcon"
                src="https://www.freeiconspng.com/uploads/search-icon-png-5.png" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'} style={{textDecoration: 'none', color: "white"}}>
                <div className="header__option" onClick={handleAuthentication}>
                        <span className='header__optionLineOne'>
                            Hello User
                        </span>
                        <span className='header__optionLineTwo'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                </div>
                </Link>
                <Link to={'/orders'} style={{textDecoration: 'none',}}>
                <div className="header__option">
                    <span className='header__optionLineThree'>
                        Returns
                    </span>
                    <span className='header__optionLineFour'>
                        Orders
                    </span>
                </div>
                </Link>
                <div className="header__option">
                    <span className='header__optionLineFive'>
                        Your
                    </span>
                    <span className='header__optionLineSix'>
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <img className="header__optionBasketimg"
                        src="https://img.icons8.com/dusk/344/shopping-basket.png" />
                        <span className="header__optionLineTwo header__basketCount">{ basket?.length }</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header
