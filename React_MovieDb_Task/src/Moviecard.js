import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import "./App.css";

function Movie({ movie, favorites, manageFavorite }) {
  const navigate = useNavigate();

  const isFavorite = favorites.includes(movie.imdbID);

  return (
    <Card className="box">
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
          <p
            onClick={() => manageFavorite(movie.imdbID)}
            style={{
              color: isFavorite ? "red" : "blue",
              cursor: "pointer",
            }}
          >
          {isFavorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default Movie;
