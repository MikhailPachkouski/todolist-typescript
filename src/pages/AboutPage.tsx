import { useNavigate } from 'react-router-dom'

type Props = {}

const AboutPage = (props: Props) => {
	const navigate = useNavigate()
	return (
		<>
			<div className='container'>
				<h2>AboutPage</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, minima
					debitis expedita voluptatem inventore at, similique, reiciendis
					excepturi aspernatur sit facilis nam soluta impedit sequi
					necessitatibus aperiam dicta eligendi mollitia ea. Quaerat expedita
					dicta sunt nostrum deserunt, sed error ratione culpa nihil quidem quia
					eum suscipit possimus cum nam similique!
				</p>
				<button className='btn' onClick={() => navigate('/')}>
					BACK
				</button>
			</div>
		</>
	)
}

export default AboutPage
