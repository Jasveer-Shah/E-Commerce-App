
import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/cartTypes'

// state contains list of users,products
//reducer takes previous state + newItem action Object
export const cartReducer = (state = [], { type, payload }) => {

    switch (type) {
        case ADD_TO_CART:
            // [...previous itemlist, {newitem.payload}]
            let cart = [...state, {
                name: payload.name,
                cartId: payload.cartId,
                productId: payload.productId,
                img: payload.img
            }]
            // 'cart' is just variable     Json.stringify(cart) this cart is the variable that contains the new list of items
            localStorage.setItem('cart', JSON.stringify(cart))
            //when an item is gonna add to the cart it will have an cart id and product id
            // check the cartActions.js
            return cart
        case REMOVE_FROM_CART:
            let modifiedCart = state.filter(item => item.cartId !== payload)
            localStorage.setItem('cart', JSON.stringify(modifiedCart))
            return modifiedCart
        default:
            return state
    }
}

