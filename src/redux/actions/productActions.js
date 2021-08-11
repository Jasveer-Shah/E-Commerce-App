import { uuidv4 } from "../../lib/uuidv4";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../types/productypes";


export const addProduct = (item) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_PRODUCT,
            payload: {
                name: item.name,
                img: item.img,
                productId: item.productId
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}

export const removeProduct = (productId) => async (dispatch) => {

    dispatch({
        type: REMOVE_PRODUCT,
        payload: productId,

    })
}