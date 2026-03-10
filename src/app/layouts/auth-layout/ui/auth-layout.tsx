import s from "./auth-layout.module.scss"
import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { PageLoader } from "@/widgets/page-loader"
import { AuthHeader } from "../components/auth-header"

export const AuthLayout = () => {
	return (
		<div className={s.layout}>
			<AuthHeader />
			<Suspense fallback={<PageLoader />}>
				<main className={s.content}>
					<Outlet />
				</main>
			</Suspense>
		</div>
	)
}
