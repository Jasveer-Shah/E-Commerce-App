import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct } from '../redux/actions/productActions'
import { useState } from 'react'
import { db } from '../firebase';
import { uuidv4 } from '../lib/uuidv4';

function Admin() {

    const [productName, setproductName] = useState('')
    const [productImg, setproductImg] = useState('')

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    //let`s create the products in the firestore and Redux -- index.js

    const handleCreateProduct = () => {
        let productId = uuidv4();
        db.collection('products').doc(productId).set({
            name: productName,
            img: productImg,
            productId: productId
        })

        if (productName !== '' && productImg !== '') {
            dispatch(addProduct({ name: productName, img: productImg }))
            setproductName('')
            setproductImg('')
        }
    }
    //let`s delete the product in the firesote  and redux -- index.js
    const handleDeleteProduct = (productId) => {
        db.collection('products').doc(productId).delete()
        dispatch(removeProduct(productId))
    }

    return (
        <div className='container'>
            <div className="form">
                <div className="inputBox" style={{ marginBottom: 20 }}>
                    <input type="text"
                        value={productName} placeholder='product  name'
                        onChange={(e) => setproductName(e.target.value)} />
                </div>

                <div className="inputBox" style={{ marginBottom: 20 }}>
                    <input type="text"
                        value={productImg} placeholder='product img url'
                        onChange={(e) => setproductImg(e.target.value)} />
                </div>
                <button onClick={handleCreateProduct}>Add product</button>
            </div>


            <div className="productList">
                {
                    products &&
                    products.map(product => {

                        <div className="productListing">
                            <img src={product.img} alt="" />
                            <h3>{product.name}</h3>
                            <button onClick={() => handleDeleteProduct(product.productId)}
                                style={{ marginTop: 0, background: 'pink' }}>
                                delete
                            </button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Admin
