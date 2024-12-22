import { Component } from '@/lib/types'
import { twMerge } from 'tailwind-merge'

const Card = ({ className, children }: Component) => {
	return (
		<div className={twMerge("p-4 rounded-md min-w-20 min-h-20", className)}>
			{children}
		</div>
	)
}

export default Card