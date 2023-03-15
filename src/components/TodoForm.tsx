import React, { useState } from 'react'

interface TodoFormProps {
	onAdd: (title: string) => void
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
	const [title, setTitle] = useState<string>('')
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value)
	}
	const handlePressKey = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			onAdd(title)
			setTitle('')
		}
	}
	return (
		<div className='input-field s6 mt-2'>
			<input
				placeholder='Enter text'
				id='title'
				type='text'
				className='validate'
				value={title}
				onChange={handleChange}
				onKeyDown={handlePressKey}
			/>
			<label htmlFor='title' className='active'>
				Todo
			</label>
		</div>
	)
}

export default TodoForm
