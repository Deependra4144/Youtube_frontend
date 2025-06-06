import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../services/axiosInstance'

export const registerUser = createAsyncThunk('auth/registerUser', async (userData, thunkAPI) => {
    try {
        // for (let pair of userData.entries()) {
        //     console.log(pair[0] + ':', pair[1]);
        // }
        const response = await axiosInstance.post('/register', userData);
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error.message)
        return thunkAPI.rejectWithValue(error.response.data.message || 'Registration failed')
    }
})

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/login', credentials);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message || 'Login failed');
    }
})

const initialState = {
    user: null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('token')
        }
    },
    extraReducers: (builder) => {
        builder
            // register
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, actions) => {
                state.loading = false;
                state.user = actions.payload;
            })
            .addCase(registerUser.rejected, (state, actions) => {
                state.loading = false;
                state.error = actions.payload
            })

            //login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, actions) => {
                state.loading = false;
                state.user = actions.payload;
                localStorage.setItem('token', actions.payload.token)
            })
            .addCase(loginUser.rejected, (state, actions) => {
                state.loading = false;
                state.error = actions.payload
            })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer;