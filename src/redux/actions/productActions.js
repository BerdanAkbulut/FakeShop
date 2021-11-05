import { ActionTypes } from "../contants/action-types"


// actionlar type ve payload ı olan objelerdir
export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

    export const selectedProduct = (product) => {
        return {
            type:ActionTypes.SELECTED_PRODUCT,
            payload:product
        }
}

export const removeSelectedProduct = () => {
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT
        
    }
}

