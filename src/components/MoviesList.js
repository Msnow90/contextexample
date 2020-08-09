import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';


export default props => {
	const [ movies, setMovies ] = useContext(MoviesContext);

	return (
		<div>
			{
				movies.length && movies.map((movie, ind) => {
					return (
						<div key={ind}>
							{movie.title}
						</div>
					)
				})
			}
		</div>
	)
}