import axios from "axios"

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

const $api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
})

$api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token")

	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})

$api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config

		if (error.response?.status === 401 && !originalRequest._isRetry) {
			originalRequest._isRetry = true

			try {
				const res = await axios.post(
					`${API_URL}/auth/refresh`,
					{},
					{ withCredentials: true },
				)

				localStorage.setItem("token", res.data.accessToken)

				return $api.request(originalRequest)
			} catch (e) {
				console.log("Не авторизован")
			}
		}

		throw error
	},
)

export default $api
