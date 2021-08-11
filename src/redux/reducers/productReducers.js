import { ADD_PRODUCT, REMOVE_PRODUCT } from "../types/productypes"


export const productReducer = (state = [], { type, payload }) => {

    switch (type) {
        case ADD_PRODUCT:
            //when an item is gonna add to the cart it will have an cart id and product id
            // check the cartActions.js
            return [...state, {
                name: payload.name,
                productId: payload.productId,
                img: payload.img
            }]
        case REMOVE_PRODUCT:
            return state.filter(item => item.productId !== payload)
        default:
            return state
    }
}

