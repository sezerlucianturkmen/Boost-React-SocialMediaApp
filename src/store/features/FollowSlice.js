import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import followService from "../../config/FollowService";

const initialStateFollow = {
  isLoading: false,
  follows: [],
  userProfileList: [],
  follow: {
    id: "",
    followId: "",
    userId: "",
  },
  error: {
    code: "",
    message: "",
    fields: [],
  },
};

export const getFollowsFetch = createAsyncThunk(
  "follow/findfollows",

  async (payload) => {
    try {
      const response = await fetch(followService.findfollows, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      return response;
    } catch (err) {
      return err.response;
    }
  }
);
export const findFollowsByToken = createAsyncThunk(
  "follow/findfollowsbytoken",

  async (payload) => {
    try {
      const response = await fetch(followService.findfollowsbytoken, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      return response;
    } catch (err) {
      return err.response;
    }
  }
);
const followSlice = createSlice({
  name: "follow",
  initialState: initialStateFollow,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getFollowsFetch.fulfilled, (state, action) => {
      state.userProfileList = action.payload;
      state.isLoading = false;
    });
    build.addCase(getFollowsFetch.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    build.addCase(getFollowsFetch.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(findFollowsByToken.fulfilled, (state, action) => {
      state.follows = action.payload;
      state.isLoading = false;
    });
    build.addCase(findFollowsByToken.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    build.addCase(findFollowsByToken.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default followSlice.reducer;
