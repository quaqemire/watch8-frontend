import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/shared/ui/button"
import { useAppDispatch } from "@/shared/hooks/useAppDispatch"
import { login } from "@/shared/store/reducers/auth/auth-slice"

export const LoginPage = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			await dispatch(login({ email, password })).unwrap()
			navigate("/")
		} catch (e: any) {
			throw new Error(e)
		}
	}

	return (
		<div>
			<h1>Войти</h1>

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

				<Button type='submit'>Войти</Button>
			</form>
		</div>
	)
}
