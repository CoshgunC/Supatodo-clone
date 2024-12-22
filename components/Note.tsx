import Button from './Button'
import { NoteProps } from '@/lib/types'
import Card from './Card';

import { Edit, Trash } from 'lucide-react';

const Note: React.FC<NoteProps> = ({ content, createdAt }) => {
	const formattedDate = new Date(createdAt).toLocaleDateString();

	return (
		<Card className='min-h-36 h-fit max-h-72 p-4 w-[70vw] max-w-[700px] min-w-[200px] bg-zinc-300/20 flex flex-col items-start justify-between'>
			<p className='noteContent text-2xl text-white overflow-ellipsis overflow-auto'>
				{content}
			</p>
			<div className='flexBetween w-full'>
				<span className='text-zinc-400'>
					{formattedDate}
				</span>
				<div className='flex w-fit m-4'>
					<Button className="p-2 ">
						<Edit size={24}/>
					</Button>
					<Button className="p-2 ">
						<Trash size={24}/>
					</Button>
				</div>
			</div>
		</Card>
	)
}



export default Note
