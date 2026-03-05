import { Button } from "@/shared/ui/button"
import s from "./not-found-page.module.scss"

export const NotFoundPage = () => {
	return (
		<div className={s.container}>
			{/* поставить иконку */}
			<h1>Страница не найдена</h1>
			<Button>Назад</Button>
		</div>
	)
}
