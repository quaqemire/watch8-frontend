import $api from "@/shared/api/api"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface AuthState {
	isLoading: boolean
	error: string | null
}

const initialState: AuthState = {
	isLoading: false,
	error: null,
}

export const register = createAsyncThunk(
	"auth/register",
	async (data: { email: string; password: string }) => {
		const response = await $api.post("auth/register", data)
		return response.data
	},
)

export const login = createAsyncThunk(
	"auth/login",
	async (data: { email: string; password: string }) => {
		const response = await $api.post("auth/login", data)
		return response.data
	},
)

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout() {
			localStorage.removeItem("token")
		},
	},
	extraReducers: (builder) => {
		;(builder.addCase(register.pending, (state) => {
			state.isLoading = true
			state.error = null
		}),
			builder.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				localStorage.setItem("token", action.payload.accessToken)
			}),
			builder.addCase(register.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message || "Ошибка в регистрации"
			}),
			builder.addCase(login.pending, (state) => {
				state.isLoading = true
				state.error = null
			}),
			builder.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				localStorage.setItem("token", action.payload.accessToken)
			}),
			builder.addCase(login.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message || "Ошибка в логине"
			}))
	},
})

export const { logout } = authSlice.actions
export default authSlice.reducer
