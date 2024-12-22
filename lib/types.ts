import { ReactNode } from "react"

export type Component = {
	children?: ReactNode;
	className?: string;
}

export type Todo = {
	content: string;
	createdAt: Date;
}

export type NoteProps = {
	content: string;
	createdAt: Date;
}