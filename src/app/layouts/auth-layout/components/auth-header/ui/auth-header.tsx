import s from "./auth-header.module.scss"
import { NavLink, useNavigate } from "react-router-dom"

export const AuthHeader = () => {
	const navigate = useNavigate()

	return (
		<header className={s.header}>
			<div className={s.brand} onClick={() => navigate("/auth/login")}>
				Wulf
			</div>

			<div className={s.auth}>
				<NavLink to='/auth/login' className={s.link}>
					Вход
				</NavLink>

				<NavLink to='/auth/register' className={s.link}>
					Регистрация
				</NavLink>
			</div>
		</header>
	)
}
