import $api from "@/shared/api/api"
import { type AuthResponse } from "@/shared/api/types/auth"

export const AuthApi = {
	async register(email: string, password: string) {
		const res = await $api.post<AuthResponse>("/auth/register", {
			email,
			password,
		})

		localStorage.setItem("token", res.data.accessToken)

		return res.data
	},

	async login(email: string, password: string) {
		const res = await $api.post<AuthResponse>("/auth/login", {
			email,
			password,
		})

		localStorage.setItem("token", res.data.accessToken)

		return res.data
	},
}
