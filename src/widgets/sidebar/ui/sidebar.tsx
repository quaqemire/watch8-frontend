import { useState } from "react"
import s from "./sidebar.module.scss"
import { NavLink, useNavigate } from "react-router-dom"
import { ThemeSwitcher } from "@/widgets/theme-switcher"

export const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false)
	const navigate = useNavigate()

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<aside className={`${s.sidebar} ${collapsed ? s.collapsed : s.sidebar}`}>
			<ul className={s.sidebar_links}>
				<li>
					<NavLink to='/'>Профиль</NavLink>
				</li>
			</ul>

			<button onClick={onToggle}>collapse</button>

			<div className={s.switchers}>
				<ThemeSwitcher />
			</div>
		</aside>
	)
}
