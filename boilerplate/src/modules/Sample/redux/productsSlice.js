import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        addNewProduct: ( state, payload ) => {
            const { name, price, description } = payload;
            state.products.push({
                name,
                price,
                description,
                quant: 1
            })
        },
        addProduct: ( state, payload ) => {
            state.products[payload.id].quant++;
        }
    }
})

const selectProduct = id => {
    return state => state.products[id] 
}

export { selectProduct }
export const { addNewProduct, addProduct } = productsSlice.actions;
export default productsSlice;
