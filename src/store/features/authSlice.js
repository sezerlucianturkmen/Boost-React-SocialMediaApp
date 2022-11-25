import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../config/AuthService";
const initialStateAuth = {
  token: "",
  isAuthanticated: false,
  auth: {},
  authList: [],
  isLoading: false,
  isLoadingRegister: false,
  isSave: false,
  code: 0,
  alertMessage: "",
  error: {
    code: "",
    message: "",
    fields: [],
  },
};

export const fetchLogin = createAsyncThunk(
  "auth/login",

  async (payload) => {
    try {
      const response = await fetch(authService.login, {
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

export const fecthRegister = createAsyncThunk(
  "auth/register",

  async (payload) => {
    try {
      const response = await fetch(authService.register, {
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

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,

  reducers: {
    setAllertMsssage: (state, action) => {
      state.alertMessage = action.payload;
    },
    setIsSave: (state, action) => {
      state.isSave = false;
      state.alertMessage = "";
    },

    logout: (state, action) => {
      state.token = "";
      state.isAuthanticated = false;
    },
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(fecthRegister.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.auth = action.payload;
        state.isSave = true;
        state.alertMessage = "Kayıt Başarılı";
      } else {
        state.error = action.payload;
        state.isSave = false;
        if (state.error.fields.length > 0) {
          state.error.fields.forEach((x) => {
            state.alertMessage += x;
          });
        } else {
          state.alertMessage = state.error.message;
        }
      }
      state.isLoadingRegister = false;
    });
    build.addCase(fecthRegister.pending, (state, action) => {
      state.isLoadingRegister = true;
      state.isSave = false;
    });
    build.addCase(fecthRegister.rejected, (state, action) => {
      state.isLoadingRegister = false;
      state.isSave = false;
      state.alertMessage = state.error.message;
    });

    build.addCase(fetchLogin.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.token = action.payload.token;
        state.isAuthanticated = true;
        console.log(state.token);
      } else {
        state.error = action.payload;
        console.log(state.error);
      }

      state.isLoading = false;
    });
    build.addCase(fetchLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    build.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { setAllertMsssage, logout, setIsSave, setAuth } =
  authSlice.actions;

export default authSlice.reducer;
