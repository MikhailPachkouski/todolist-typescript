import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import AboutPage from './pages/AboutPage'
import TodoPage from './pages/TodoPage'

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<TodoPage />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
