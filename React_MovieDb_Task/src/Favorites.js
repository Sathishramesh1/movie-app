

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import "./App.css";
import { API_KEY } from "./Global";

function Favorites() {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const navigate = useNavigate();
    
    
    useEffect(() => {
       
        const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];

        const fetchFavoriteMovies = async () => {
            const movies = [];
            for (const id of favoriteIds) {
                const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
                const movie = await response.json();
                movies.push(movie);
            }
            setFavoriteMovies(movies);
        };

        if (favoriteIds.length > 0) {
            fetchFavoriteMovies();
        }
    }, []);

 return (
    <div className="favt-container">
      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((movie) => (
          <Card className="box" key={movie.imdbID}>
            <img className="banner" src={movie.Poster} alt={movie.Title} />
            <CardContent>
              <div className="cardbody">
                <h6 className="title">
                  {movie.Title}
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/movie/${movie.imdbID}`)}
                  >
                    <InfoIcon />
                  </IconButton>
                </h6>
                <h6>Year of Release: {movie.Year}</h6>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <h4>You have no favorite movies yet.</h4>
      )}
    </div>
          );
}

export default Favorites;
