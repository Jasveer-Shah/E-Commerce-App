import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
import './css/Browse.css'

function Browse() {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const addToCartHandler = (product) => {
        console.log(product)
        dispatch(addToCart(product))
    }

    return (
        <div className='container'>
            <h1>Top products</h1>
            <div className="productContainer">
                {
                    products &&
                    products.map(product => (
                        // these braces to wrap the jsx
                        <div className="productCard" key={product.productId}>

                            <div className='imgContainer'>
                                <img src={product.img} alt="" />
                            </div>
                            <div>
                                <h3>{product.name}</h3>
                                <button onClick={() => addToCartHandler(product)}>Add To cart</button>
                            </div>

                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Browse
