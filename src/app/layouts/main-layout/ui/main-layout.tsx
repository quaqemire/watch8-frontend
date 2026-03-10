import { Sidebar } from "@/widgets/sidebar"
import s from "./main-layout.module.scss"
import { Outlet, useNavigate } from "react-router-dom"
import { Suspense, useEffect } from "react"
import { PageLoader } from "@/widgets/page-loader"
import { Header } from "@/widgets/header"

export const MainLayout = () => {
	const navigate = useNavigate()
	const token = localStorage.getItem("token")

	useEffect(() => {
		if (!token) {
			navigate("/auth/login")
		}
	}, [token])

	return (
		<div className={s.layout}>
			<Header />
			<div className={s.page}>
				<Sidebar />
				<Suspense fallback={<PageLoader />}>
					<main className={s.content}>
						<Outlet />
					</main>
				</Suspense>
			</div>
		</div>
	)
}
