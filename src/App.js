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
        <Router>
          <Navbar>
            <Drawer></Drawer>
          </Navbar>
          <Switch>
            <Route path='/'></Route>
            <Route path='/login'></Route>
            
            <AuthProvider>
              <AuthGuard>
                
                <DashboardProvider>
                  
                  <Route path='/overview'></Route>

                  
                  <Route path='/billing'></Route>
                </DashboardProvider>
              
              </AuthGuard>
            </AuthProvider>
          </Switch>
        </Router>




          <MoviesProvider>
            <MoviesList />
            <AddMovieForm />
          </MoviesProvider>
      </header>
    </div>
  );
}

export default App;
