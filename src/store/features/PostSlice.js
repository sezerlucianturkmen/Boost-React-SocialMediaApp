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
export const findallMYFollowPostFetch = createAsyncThunk(
  "post/findallmyfollowpost",

  async (payload) => {
    const userList = payload.follows;

    try {
      let newUrl = "";
      userList.forEach((element) => {
        newUrl += "userIdList=" + element + "&";
      });
      const response = await fetch(postService.findallmyFollowPost + newUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.token),
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      return response;
    } catch (error) {
      return error.response;
    }
  }
);
export const findallMYFollowPost2Fetch = createAsyncThunk(
  "post/findallmyfollowpost2",
  async (payload) => {
    try {
      const response = await fetch(postService.findallmyFollowPost2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      return response;
    } catch (error) {
      return error.response;
    }
  }
);

export const findMyPostFetch = createAsyncThunk(
  "post/getmypost",
  async (payload) => {
    try {
      const response = await fetch(postService.getMyPost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
    build.addCase(findallMYFollowPostFetch.fulfilled, (state, action) => {
      state.postList = action.payload;
      state.isLoading = false;
    });
    build.addCase(findallMYFollowPostFetch.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    build.addCase(findallMYFollowPostFetch.pending, (state, action) => {
      state.isLoading = true;
    });
    build.addCase(findallMYFollowPost2Fetch.fulfilled, (state, action) => {
      state.postList = action.payload;
      state.isLoading = false;
    });
    build.addCase(findallMYFollowPost2Fetch.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    build.addCase(findallMYFollowPost2Fetch.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(findMyPostFetch.fulfilled, (state, action) => {
      state.myPostList = action.payload;
      state.isLoading = false;
    });
    build.addCase(findMyPostFetch.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    build.addCase(findMyPostFetch.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default postSlice.reducer;
