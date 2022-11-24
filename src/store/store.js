import {configureStore} from '@reduxjs/toolkit';
import {
    AuthSlice,UserSlice
} from './features';
const store = configureStore({
    reducer: {
        auth: AuthSlice,
        user: UserSlice,
    }
});
export default store;