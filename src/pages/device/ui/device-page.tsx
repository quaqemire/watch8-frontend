import { ProductCard } from "@/entities/card"
import s from "./catalog-page.module.scss"

const products = [
	{
		id: 1,
		title: "Casio G-Shock",
		price: 120,
		description: "Прочные спортивные часы",
		image:
			"https://n.nordstrommedia.com/it/48cbc21d-000d-4710-8583-2e83baf55818.jpeg?h=368&w=240&dpr=2",
	},
	{
		id: 2,
		title: "Casio G-Shock",
		price: 120,
		description: "Прочные спортивные часы",
		image:
			"https://n.nordstrommedia.com/it/48cbc21d-000d-4710-8583-2e83baf55818.jpeg?h=368&w=240&dpr=2",
	},
	{
		id: 3,
		title: "Casio G-Shock",
		price: 120,
		description: "Прочные спортивные часы",
		image:
			"https://n.nordstrommedia.com/it/48cbc21d-000d-4710-8583-2e83baf55818.jpeg?h=368&w=240&dpr=2",
	},
]

export const DevicePage = () => {
	return (
		<div className={s.container}>
			<h1>Страница каталога</h1>
			<div className={s.products_wrapper}>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
						image={product.image}
					/>
				))}
			</div>
		</div>
	)
}
