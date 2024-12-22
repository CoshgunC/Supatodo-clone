import { Button, Input } from '@/components'
import { Plus } from 'lucide-react'
const Form = () => {
	return (
		<form className='w-fit h-fit border-2 rounded-xl p-4'>
			<h1 className='text-4xl text-center'>Create new todo</h1>
			<div className='w-full flex items-center justify-between p-4 space-x-4'>
				<Input/>
				<Button className="bg-white text-black">
					<Plus fontWeight={800} size={24}/>
				</Button>
			</div>
		</form>
	)
}

export default Form