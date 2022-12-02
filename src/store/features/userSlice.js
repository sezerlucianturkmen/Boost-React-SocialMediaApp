import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import userService from "../../config/UserService";

const initialStateUser = {
  token: "",
  userProfile: {
    follows: [],
  },
  otherUserProfile: {},
  currentUserId: null,
  userProfileList: [],
  isLoading: false,
  error: {
    code: "",
    message: "",
    fields: [],
  },
};

export const findbyTokenwithAxios = createAsyncThunk(
  "user/getuser",
  async (payload) => {
    try {
      const response = await axios.post(userService.findbytoken, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const findByUserId = createAsyncThunk(
  "user/findbyuserid",
  async (payload) => {
    try {
      const response = await axios.post(userService.findbyid + payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const findallUser = createAsyncThunk(
  "user/findalluser",
  async (payload) => {
    try {
      const response = await axios.get(userService.findall, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: initialStateUser,

  reducers: {},
  extraReducers: (build) => {
    build.addCase(findbyTokenwithAxios.fulfilled, (state, action) => {
      state.userProfile = action.payload;
      state.currentUserId = action.payload.id;
      state.isLoading = false;
    });

    build.addCase(findbyTokenwithAxios.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    build.addCase(findbyTokenwithAxios.pending, (state, action) => {
      state.isLoading = true;
    });
    build.addCase(findByUserId.fulfilled, (state, action) => {
      state.otherUserProfile = action.payload;
      state.isLoading = false;
    });

    build.addCase(findByUserId.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    build.addCase(findByUserId.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(findallUser.fulfilled, (state, action) => {
      state.userProfileList = action.payload;
      state.isLoading = false;
    });

    build.addCase(findallUser.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    build.addCase(findallUser.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
