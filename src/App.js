import React from 'react'
import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'
import './App.css'

const url = 'https://course-api.com/react-tours-project'

function App() {
	const [tours, setTours] = useState([])
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const res = await fetch(url);
			const response = await res.json();
			setTours(response);
			setLoading(false)
		};
		fetchData();
	}, [setTours]);

	return (
		<main className='main'>
			{loading ? (
				<Loading />
			) : (
				<>
					<h1 className='title'>Our Tours</h1>
					<p className='underline'></p>
						<section className='tours'>
						{
							tours?.map((tour) => (
								<Tours
									key={tour.id}
									name={tour.name}
									info={tour.info}
									image={tour.image}
									price={tour.price}
								/>
							))
						}
					</section>
				</>
			)}
		</main>
	)
}
export default App
