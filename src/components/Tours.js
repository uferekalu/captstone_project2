import React, { useState } from 'react'

const Tours = ({ name, info, image, price, removeTour, tourId }) => {
	const [readMore, setReadMore] = useState(false)
	return (
		<div className='tour'>
			<img src={image} alt={name} />
			<div class='tour-info'>
				<header className='tour-header'>
					<h4>{name}</h4>
					<p className='tour-price'>${price}</p>
				</header>
				<div className='tour-details'>
					<p>
						{readMore ? info : `${info.substring(0, 200)}...`}{' '}
						<button
							class='see-more-btn'
							onClick={() => setReadMore(!readMore)}>
							{readMore ? 'See Less' : 'See More'}
						</button>
					</p>
				</div>
				<button class='delete-btn' onClick={() => removeTour(tourId)}>Not Interested</button>
			</div>
		</div>
	)
}

export default Tours
