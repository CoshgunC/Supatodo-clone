import { Component } from '@/lib/types'
import { twMerge } from 'tailwind-merge'

type ButtonType = Component & {
	onClick?: (event: MouseEvent) => void
}

const Button = ({ className, children }: ButtonType) => {
	return (
		<div className={twMerge(`w-fit h-fit transition duration-150
		cursor-pointer p-4 rounded-md dark:hover:bg-zinc-500/60`, className)}>
			{children} 
		</div>
	)
}

export default Button