import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'

export default configureStore({
    reducer: {
        shop: productsSlice,
    }
})

export { addNewProduct, addProduct, selectProduct } from './productsSlice'
