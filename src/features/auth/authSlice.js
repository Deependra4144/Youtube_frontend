import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerInstance, loginInstance } from '../../services/axiosInstance'

export const registerUser = createAsyncThunk('auth/registerUser', async (userData, thunkAPI) => {
    try {
        // for (let pair of userData.entries()) {
        //     console.log(pair[0] + ':', pair[1]);
        // }
        const response = await registerInstance.post('/register', userData);
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error.message)
        return thunkAPI.rejectWithValue(error.response.data.message || 'Registration failed')
    }
})

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, thunkAPI) => {
    try {
        const response = await loginInstance.post('/login', credentials);
        return response.data;
    } catch (error) {
        // console.log(error.response.data.message)
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
})

export const loadUser = createAsyncThunk('auth/loadUser', async (_, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        if (!token) {
            console.log("No token found")
        }
        const response = await loginInstance.get('/current-user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        // console.log(response)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Faild to load user")
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
                // console.log(actions.payload)
                localStorage.setItem('token', actions.payload.data.accessToken)
            })
            .addCase(loginUser.rejected, (state, actions) => {
                state.loading = false;
                state.error = actions.payload
            })

            //load user
            .addCase(loadUser.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(loadUser.fulfilled, (state, actions) => {
                state.loading = false;
                state.error = null;
                state.user = actions.payload
                console.log(state.user)
            })
            .addCase(loadUser.rejected, (state, actions) => {
                state.loading = false;
                state.error = actions.payload;
                state.user = null
            })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer;