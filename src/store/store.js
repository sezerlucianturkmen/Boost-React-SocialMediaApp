import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice, UserSlice, PostSlice } from "./features";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    post: PostSlice,
  },
});

export default store;
