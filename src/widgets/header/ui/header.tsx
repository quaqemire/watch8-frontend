import { ThemeSwitcher } from "@/widgets/theme-switcher"
import s from "./header.module.scss"
import { NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
	const navigate = useNavigate()

	return (
		<header className={s.header}>
			<div className={s.brand} onClick={() => navigate("/")}>
				Wulf
			</div>

			<div className={s.auth}>
				
				<NavLink to='/auth/login' className={s.link}>
					Вход
				</NavLink>

				<NavLink to='/auth/registration' className={s.link}>
					Регистрация
				</NavLink>
			</div>
		</header>
	)
}
