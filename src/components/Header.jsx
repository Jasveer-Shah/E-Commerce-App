import React from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css';


function Header() {
    return (
        <div className='header'>

            <Link to='/'>
                <img width={25} src='./assets/images/logo.svg' />
            </Link>

            <div className='nav'>
                <Link to='/browse'>Browse</Link>

                <Link to='/cart'>
                    <img src='./images/cart.svg' alt='cart' />
                </Link>
            </div>
        </div>
    )
}

export default Header
