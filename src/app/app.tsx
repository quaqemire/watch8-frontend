import { AppRouter } from "./router/app-router.tsx"
import { Header } from "@/widgets/header"
import { useTheme } from "@/shared/hooks/useTheme.ts"
import { Suspense } from "react"

export const App = () => {
	const { theme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<Suspense fallback=''>
				<AppRouter />
			</Suspense>
		</div>
	)
}
