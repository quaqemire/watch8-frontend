import { type ButtonHTMLAttributes, type FC } from "react"
import s from "./button.module.scss"

export enum VariantButton {
	default = "default",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: VariantButton
}

export const Button: FC<ButtonProps> = ({ className, children, variant, ...props }) => {
	return (
		<button className={`${s.button} ${className} ${variant}`} {...props}>
			{children}
		</button>
	)
}
