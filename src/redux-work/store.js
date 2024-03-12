import {configureStore} from '@reduxjs/toolkit'
import productslice from './productslice'
import Cartslice from './Cartslice'

export const store=configureStore({
reducer:{
    product:productslice,
    cart: Cartslice

}
})