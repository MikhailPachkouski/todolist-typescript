import { ITodo } from './interfaces'

interface TodoListProps {
	todos: ITodo[]
	onToggle: (id: number) => void
	onRemove: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
	const getClasses = (todo: ITodo) => {
		if (todo.completed) {
			return 'todo completed'
		} else {
			return 'todo'
		}
	}
	const removeHandler = (event: React.MouseEvent, id: number) => {
		event.preventDefault()
		onRemove(id)
	}

	if (todos.length === 0) return <h5 className='center'>No Todos</h5>
	return (
		<div>
			<ul>
				{todos.map((todo: ITodo) => (
					<li key={todo.id} className={getClasses(todo)}>
						<label>
							<input
								type='checkbox'
								checked={todo.completed}
								onChange={() => onToggle(todo.id)}
							/>
							<span>{todo.title}</span>
							<i
								className='material-icons red-text'
								onClick={e => removeHandler(e, todo.id)}
							>
								delete
							</i>
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TodoList
