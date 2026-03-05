import { useTheme } from "@/shared/hooks/useTheme"
import s from "./theme-switcher.module.scss"
import { Contrast } from "lucide-react"
import { Button } from "@/shared/ui/button"

export const ThemeSwitcher = () => {
	const { toggleTheme } = useTheme()
	return (
		<Button className={s.toggle_theme} onClick={toggleTheme}>
			<Contrast className={s.icon} />
		</Button>
	)
}
