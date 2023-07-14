//for adding item to cart
export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

//for removing item from cart
export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}