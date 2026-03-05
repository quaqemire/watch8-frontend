import { Route, Routes } from "react-router-dom"
import { lazy } from "react"
import { MainLayout } from "@/app/layouts/main-layout"

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

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={"/"} element={<MainLayout />}>
				<Route index element={<MainPage />} />
				<Route path='/product/:id' element={<ProductPage />} />
				<Route path='/catalog' element={<CatalogPage />} />
			</Route>

			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}
