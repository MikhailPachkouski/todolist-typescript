import { useEffect, useState } from 'react'
import { ITodo } from '../components/interfaces'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

const TodoPage = () => {
	const [todos, setTodos] = useState<ITodo[]>(
		JSON.parse(localStorage.getItem('todos') || '[]')
	)
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])
	const addHandler = (title: string) => {
		const newTodo: ITodo = {
			id: Date.now(),
			title: title,
			completed: false,
		}
		setTodos(prev => [...prev, newTodo])
	}
	const toggleHandler = (id: number) => {
		setTodos((prev: ITodo[]) => {
			return prev.map((todo: ITodo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed }
				}
				return todo
			})
		})
	}
	const removeHandler = (id: number) => {
		const shouldRemove = window.confirm('Are you sure?')
		if (shouldRemove) {
			setTodos((prev: ITodo[]) => prev.filter((todo: ITodo) => todo.id !== id))
		}
	}
	return (
		<div className='container'>
			<TodoForm onAdd={addHandler} />
			<TodoList
				todos={todos}
				onToggle={toggleHandler}
				onRemove={removeHandler}
			/>
		</div>
	)
}

export default TodoPage
