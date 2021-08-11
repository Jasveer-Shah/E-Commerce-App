import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './css/Navbar.css';


function Navbar() {
    const cart = useSelector(state => state.cart)

    return (
        <div className='navbar'>

            <Link to='/'>
                <img width={25} src='./assets/images/logo.svg' alt='logo' />
            </Link>

            <div className='nav'>
                <Link to='/browse'>Browse</Link>
                <Link to='/search'>
                    <img width={20} style={{ marginBottom: -50 }}
                        src='./assets/images/search.svg' alt='cart' />
                </Link>
                <Link to='/cart'>
                    <span className='cartCount'>{cart.length}</span>
                    <img width={20} src='./assets/images/cart.svg' alt='cart' />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
