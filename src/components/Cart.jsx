import React from 'react'
import './css/Browse.css';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions'
import { Link } from 'react-router-dom';

function Cart() {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const removeFromCartHandler = (product) => {
        dispatch(removeFromCart(product))
    }

    return (
        <div className='container'>
            <h1>Your Cart</h1>
            <div className="productContainer">
                {
                    cart.length > 0 ?
                        cart.map(product => (
                            // these braces to wrap the jsx
                            <div className="productCard" key={product.productId}>

                                <div className='imgContainer'>
                                    <img src={product.img} alt="" />
                                </div>
                                <div>
                                    <h3>{product.name}</h3>
                                    <button onClick={() => removeFromCartHandler(product.cartId)}>Remove</button>
                                </div>

                            </div>

                        ))
                        :
                        <>
                            <h2 style={{ marginBottom: 50 }}>Looks like your cart is empty</h2>
                            <Link to='/browse' className='button' >Browse </Link>
                        </>
                }
            </div>

        </div>
    )
}

export default Cart
