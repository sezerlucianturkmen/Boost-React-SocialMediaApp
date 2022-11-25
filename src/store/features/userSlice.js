import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import userService from "../../config/UserService";

const initialStateUser = {
  token: "",
  userProfile: {},
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

const userSlice = createSlice({
  name: "user",
  initialState: initialStateUser,

  reducers: {},
  extraReducers: (build) => {
    build.addCase(findbyTokenwithAxios.fulfilled, (state, action) => {
      state.userProfile = action.payload;
      state.isLoading = false;
    });

    build.addCase(findbyTokenwithAxios.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    build.addCase(findbyTokenwithAxios.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default userSlice.reducer;
