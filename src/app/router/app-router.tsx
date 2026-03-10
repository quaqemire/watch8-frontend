import { Route, Routes } from "react-router-dom"
import { lazy } from "react"
import { MainLayout } from "@/app/layouts/main-layout"
import { AuthLayout } from "../layouts/auth-layout"

// PAGES
const MainPage = lazy(() => import("@/pages/main").then((module) => ({ default: module.MainPage })))
const NotFoundPage = lazy(() =>
	import("@/pages/not-found").then((module) => ({ default: module.NotFoundPage })),
)
const ProductPage = lazy(() =>
	import("@/pages/product").then((module) => ({ default: module.ProductPage })),
)
const CatalogPage = lazy(() =>
	import("@/pages/catalog").then((module) => ({ default: module.CatalogPage })),
)
const RegisterPage = lazy(() =>
	import("@/pages/auth/register").then((module) => ({ default: module.RegisterPage })),
)
const LoginPage = lazy(() =>
	import("@/pages/auth/login").then((module) => ({ default: module.LoginPage })),
)

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={"/"} element={<MainLayout />}>
				<Route index element={<MainPage />} />
				<Route path='/product/:id' element={<ProductPage />} />
				<Route path='/catalog' element={<CatalogPage />} />
			</Route>

			<Route path={"/auth"} element={<AuthLayout />}>
				<Route path='login' element={<LoginPage />} />
				<Route path='register' element={<RegisterPage />} />
			</Route>

			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}
