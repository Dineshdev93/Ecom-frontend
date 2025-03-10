import {configureStore} from '@reduxjs/toolkit'
// import  Admin_Slice  from '../slice/adminAuthSlice/AdminSlics'
import Admin_Slice from '../slice/adminAuthSlice/AdminSlics'
import adminproductsSlice from '../slice/adminproductSlice/adminproductSlice'
import UserAuthSlice from '../slice/userAuthSlice/UserSlice'
export const store = configureStore({
    reducer : {
        admin : Admin_Slice,
        userauth : UserAuthSlice,
        products : adminproductsSlice
    }
})