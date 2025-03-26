import {configureStore} from '@reduxjs/toolkit'
// import  Admin_Slice  from '../slice/adminAuthSlice/AdminSlics'
import Admin_Slice from '../slice/adminAuthSlice/AdminSlics'
import adminproductsSlice from '../slice/adminproductSlice/adminproductSlice'
import UserAuthSlice from '../slice/userAuthSlice/UserSlice'
import Cart_Slice from '../slice/CartSlice/cartSlice'
import PaymentsSlice from '../slice/paymentsSlice/paymentsSlice'
export const store = configureStore({
    reducer : {
        admin : Admin_Slice,
        userauth : UserAuthSlice,
        products : adminproductsSlice,
        cart : Cart_Slice,
        Payments : PaymentsSlice
    }
})