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
	
	const removeTour = (id) => {
		const currentTours = tours.filter((tour) => tour.id !== id);
		setTours(currentTours)
	}

	const refreshPage = () => {
		const fetchData = async () => {
			setLoading(true);
			const res = await fetch(url);
			const response = await res.json();
			setTours(response);
			setLoading(false)
		};
		fetchData();
	}

	return (
		<main className='main'>
			{loading ? (
				<Loading />
			) : (
				<>
					{tours.length === 0 ? (
						<>
							<h1 className='title'>There are no tours left</h1>
							<button class='refresh' onClick={refreshPage}>Refresh</button>
						</>
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
											tourId={tour.id}
											info={tour.info}
											image={tour.image}
											price={tour.price}
											removeTour={removeTour}
										/>
									))
								}
							</section>
						</>
					)}
					
				</>
			)}
		</main>
	)
}
export default App
