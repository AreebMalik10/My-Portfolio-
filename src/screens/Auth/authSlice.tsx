import { loginApi } from "@/Api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const adminLoginRequest = createAsyncThunk<any, { username: string; password: string }>(
    "auth/loginRequest",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await loginApi(payload);
            // `loginApi` returns `res.data` from the API helper. Return it directly.
            return response;
        } catch (err: any) {
            return rejectWithValue(err?.response?.data || "Login failed");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        loading: false,
        data: null,
        error: null,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminLoginRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(adminLoginRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // Token might be at top-level or inside `data` depending on API shape
                state.token = (action.payload && (action.payload.token || action.payload.data?.token)) || null;
            })
            .addCase(adminLoginRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.payload as any) || action.error?.message || "Login failed";
            });
    }
})

export const authData = (state: any) => state.auth;

export default authSlice.reducer;