import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        loading:false,
        error:null,
        isLoggedIn: false,
    },

    reducers:{
        signupStart:(state)=>{
            state.loading=true;
            state.error=null;
        },
        signupSuccess:(state,action)=>{
            state.loading=false;
            state.user=action.payload;
            state.isLoggedIn =true;
        },
        signupFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false; 
        },

    },
});

export const { signupStart, signupSuccess, signupFailure ,logout} = authSlice.actions;
export default authSlice.reducer;