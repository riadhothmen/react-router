import React, {useState} from 'react';
import './App.css';
import Search from "./components/Search/Search";
import MovieList from "./components/MovieList/MovieList";
import { moviesData  } from "./Data";
import AddMovie from './components/AddMovie/AddMovie';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import DiscriptionTrailer from './components/DiscriptionTrailer/DiscriptionTrailer';



const App = () => {
  const [movies , setMovies] = useState(moviesData);
  const [searchRate, setSearchRate] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event) => setSearchValue(event.target.value);
  const handleSearchRate = (newRate) => setSearchRate(newRate);




 const addMovie = (newMovie) => setMovies([...movies, newMovie]);
  return(
      <div>
          <Search
        searchValue={searchValue}
        handleSearch={handleSearch}
        searchRate={searchRate}
        handleSearchRate={handleSearchRate}
      />
     
         <AddMovie handleAdd = {addMovie} />
         <Switch>

           <Route exact path="/"> 
           <MovieList
        movieList={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLowerCase().trim()) &&
            movie.rating >= searchRate
        )}
      />
            </Route>                                                      
            <Route exact path="/trailer/:name" render ={(props) => <DiscriptionTrailer res={movies}  {...props}   />}   />
            </Switch>

      </div>
  )
};

export default App;