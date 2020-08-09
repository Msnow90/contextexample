import React, { useState, createContext } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = props => {
	const [ movies, setMovies ] = useState([
		{
			title: 'Harry Potter',
			price: 10
		},
		{
			title: 'Jumanji',
			price: 20
		},
		{
			title: 'Jurassic Park',
			price: 15
		}
	])

	return (
		<MoviesContext.Provider value={[ movies, setMovies ]}>
			{ props.children }
		</MoviesContext.Provider>
	)
}