import React, { useContext, useState } from 'react';
import { MoviesContext } from '../context/MoviesContext';


export default props => {
	const [ movies, setMovies ] = useContext(MoviesContext);
	const [ title, setTitle ] = useState('');
	const [ price, setPrice ] = useState(0);

	const setMovieTitle = e => {
		setTitle(e.target.value);
	}

	const setMoviePrice = e => {
		setPrice(e.target.value);
	}

	const addMovie = e => {
		e.preventDefault();

		setMovies(prevMovies => {
			return [...prevMovies, { title, price }];
		})
	}

	return (
		<div>
			<form onSubmit={addMovie}>
				<input type="text" name="title" value={title} onChange={setMovieTitle} placeholder='Movie title...'></input>
				<input type="number" name="price" value={price} onChange={setMoviePrice} placeholder='Movie price...'></input>
				<input type="submit" value="Submit"></input>
			</form>
		</div>
	)
}


