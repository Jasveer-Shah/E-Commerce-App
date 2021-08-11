// create store

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { cartReducer } from './reducers/cartReducer'
import { productReducer } from './reducers/productReducers';

import { db } from '../firebase';


let productsData = [];
const productsRef = db.collection('products')

productsRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        productsData.push(doc.data())
    })
})

const reducers = combineReducers(
    {
        cart: cartReducer,
        products: productReducer
    }
)


// const middleWare = [thunk]    // cart is key in JSON.parse(localStorage.getItem('cart'))
// in the initial state -- we are getting data from local storage and getting products from firestore
const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    products: productsData || []
}


const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

export default store;


//{
    //         name: 'iphone',
    //         img: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12-Pro/Gold/Apple-iPhone-12-Pro-Gold-frontimage.png',
    //         productId: uuidv4()
    //     },
    //     {
    //         name: 'iphone2',
    //         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsW_NKLZQibyYIFfxHQL7aRYojnEzs6FxxzJA7w_7ZmUvMWzxAnceO4zEffw&usqp=CAc',
    //         productId: uuidv4()
    //     },
    //     {
    //         name: 'iphone3',
    //         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsW_NKLZQibyYIFfxHQL7aRYojnEzs6FxxzJA7w_7ZmUvMWzxAnceO4zEffw&usqp=CAc',
    //         productId: uuidv4()
    //     },