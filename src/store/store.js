import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice, UserSlice, PostSlice, FollowSlice } from "./features";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    post: PostSlice,
    follow: FollowSlice,
  },
});

export default store;
