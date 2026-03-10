import { useState } from "react"
import { AuthApi } from "@/entities/auth/api/auth.api"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")

	const navigate = useNavigate()

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			await AuthApi.login(email, password)

			navigate("/")
		} catch (e: any) {
			setError(e.response?.data?.message || "Ошибка входа")
		}
	}

	return (
		<div>
			<h1>Вход</h1>

			<form onSubmit={handleLogin}>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type='password'
					placeholder='Пароль'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button type='submit'>Вход</button>
			</form>

			{error && <p>{error}</p>}
		</div>
	)
}
