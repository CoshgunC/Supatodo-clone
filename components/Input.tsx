import { Component } from "@/lib/types"
import { twMerge } from "tailwind-merge"

const Input = (props: Component) => {
  return (
    <input className={twMerge("p-4 bg-transparent rounded-md border-2 dark:border-white", props.className)} />
  )
}

export default Input