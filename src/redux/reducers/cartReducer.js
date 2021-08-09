import React from 'react'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/cartTypes'


const cartReducer = (state = [], { type, payload }) => {

    switch (action.type) {
        case ADD_TO_CART:

            //when an item is gonna add to the cart it will have an cart id and product id
            // check the cartActions.js
            return [...state, {
                name: payload.name,
                cartId: payload.cartId,
                productId: payload.productId,
                img: payload.img
            }]
        case REMOVE_FROM_CART:
            return state.filter(item => item.cartId !== payload)
        default:
            return state
    }
}

export default cartReducer
