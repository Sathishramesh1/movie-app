import React, { useState, useEffect } from "react";
import Movie from "./Moviecard";
import "./App.css";
import { useData } from "./Context/FetchAllMovies";
import Pagination from "./Pagination";

function MovieList() {
  const [movies, setMovies] = useData();
  const [favorites, setFavorites] = useState([]);

  const [currentPage,setCurrentPage] = useState(1);
  const [recordPerPage] = useState(4);

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage
  const currentRecords = movies.slice(indexOfFirstRecord,indexOfLastRecord)
  
  const nPages = Math.ceil(movies.length/recordPerPage);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const manageFavorite = (id) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
    <div className="movie-container">
    {movies.length > 0 ? (
      currentRecords.map((movie) => (
        <>
        <Movie
          key={movie.imdbID}
          movie={movie}
          favorites={favorites}
          manageFavorite={manageFavorite}
        />
       
       </>
      ))
    ) : (
      <h4>Loading...</h4>
    )}
    
  </div>
     <Pagination 
        nPages = {nPages}
        currentPage ={currentPage}
        setCurrentPage ={setCurrentPage}
       />
  </>
  );
}

export default MovieList;
