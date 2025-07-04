const App = ({ restaurants }) => {
	return (
		<div>
			<h1>Restaurants</h1>
			{restaurants.map(r => (
				<div key={r.id} className="restaurant">
					<h2>{r.name}</h2>
					<h3>Меню</h3>
					<ul>
						{r.menu.map(dish => (
							<li key={dish.id}>{dish.name}</li>
						))}
					</ul>
					<h3>Отзывы</h3>
					{r.reviews.map(review => (
						<li key={review.id}>
							{review.user}: {review.text}
						</li>
					))}
				</div>
			))}
		</div>
	);
}

export default App;