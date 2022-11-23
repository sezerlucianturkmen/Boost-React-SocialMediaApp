import {configureStore} from '@reduxjs/toolkit';
import {
    authSlice
} from './features';
const store = configureStore({
    reducer: {
        auth: authSlice,
    }
});
export default store;