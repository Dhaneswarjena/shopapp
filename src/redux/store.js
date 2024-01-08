import { configureStore } from "@reduxjs/toolkit";
import Slicecart from '../../src/reducer'
const store=configureStore({
    reducer:{
        prodtItem:Slicecart
    }
})

export default store