import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MoviesProvider } from './context/MoviesContext';
import MoviesList from './components/MoviesList';
import AddMovieForm from './components/AddMovieForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MoviesProvider>
            <MoviesList />
            <AddMovieForm />
          </MoviesProvider>
      </header>
    </div>
  );
}

export default App;
