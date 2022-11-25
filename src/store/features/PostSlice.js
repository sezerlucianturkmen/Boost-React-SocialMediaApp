import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "../../config/PostService";

const initialStatePost = {
  postList: [],
  myPostList: [],
  isLoading: false,
  post: {
    id: "",
    userId: "",
    title: "",
    username: "",
    content: "",
    postMediaUrl: "",
    like: 0,
    dislike: 0,
    sharedTime: 0,
  },
  error: {
    code: "",
    message: "",
    fields: [],
  },
};
export const findallPostFetch = createAsyncThunk(
  "post/findall",

  async () => {
    try {
      const response = await fetch(postService.findall, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      return response;
    } catch (error) {
      return error.response;
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: initialStatePost,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(findallPostFetch.fulfilled, (state, action) => {
      state.postList = action.payload;
      state.isLoading = false;
    });
    build.addCase(findallPostFetch.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    build.addCase(findallPostFetch.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default postSlice.reducer;
