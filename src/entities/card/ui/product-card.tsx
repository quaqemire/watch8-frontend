import s from "./product-card.module.scss"

interface ProductCardProps {
	title: string
	price: number
	description: string
	image: string
}

export const ProductCard = ({ title, price, description, image }: ProductCardProps) => {
	return (
		<div className={s.contaner}>
			<img src={image} alt='productCard image' />
			<span className={s.price}>{price}</span>
			<h2 className={s.title}>{title}</h2>
			<span className={s.description}>{description}</span>
		</div>
	)
}
