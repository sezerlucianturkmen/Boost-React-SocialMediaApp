import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import AuthService from '../../config/AuthService';
const initialStateAuth = {
    token: "",
    isAuthanticated: false,
    auth: [],
    isLoading: false,
    isLoadingRegister: false,
    code: 0,
    error: {
      code: "",
      message: "",
      fields: [],
    },
  };

  export const fetchRegister = createAsyncThunk(
    "auth/register",
  
    async (payload) => {
      try {
        const response = await fetch(AuthService.register, {
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

export const fetchLogin= createAsyncThunk(
    'auth/Login',    
    async (payload)=>{    
        try{
            const response = await fetch(AuthService.login,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'              
                    },        
                    body: JSON.stringify(payload),
                }).then(data => data.json())
                .catch((error) => console.log(error)); 
                return response;
        }catch (err) {
            return err.response;
          }
      
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: initialStateAuth,
  
    reducers: {},
    extraReducers: (build) => {
      build.addCase(fetchRegister.fulfilled, (state, action) => {
        if (action.payload.code === 200) {
          state.auth = action.payload;
        } else {
          state.error = action.payload;
        }
        console.log(state.error);
        console.log(state.auth);  
        state.isLoadingRegister = false;
      });

      build.addCase(fetchRegister.pending, (state, action) => {
        state.isLoadingRegister = true;
      });
      
      build.addCase(fetchRegister.rejected, (state, action) => {
        state.isLoadingRegister = false;
      });

      build.addCase(fetchLogin.pending,(state)=>{
        state.isLoadingLogin=true;
      });    
      
      build.addCase(fetchLogin.fulfilled,(state,action)=>{
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
     
      build.addCase(fetchLogin.rejected,(state)=>{
                 state.isLoadingLogin=false;
      });


    },
  });

export default authSlice.reducer;