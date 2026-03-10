import { createRoot } from "react-dom/client"
import { App } from "./app.tsx"
import { BrowserRouter } from "react-router-dom"
import "@/shared/assets/styles/index.scss"
import "@/shared/assets/styles/tailwind/tailwind.css"
import { ThemeProvider } from "@/app/providers/theme-provider/ui/theme-provider.tsx"
import { setupStore } from "@/shared/store/store.ts"
import { Provider } from "react-redux"

const store = setupStore()

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>,
)
