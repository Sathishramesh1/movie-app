import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import { API_KEY } from "./Global";

function MovieDetail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleMovie();
  }, []);

  const getSingleMovie = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      const movie = await response.json();
      setMovieData(movie);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  if (loading) {
    return <div>Loading movie details...</div>;
  }

  return (
    <div className="movie-detail-container">
      <div>
        <img
          src={movieData.Poster}
          alt={movieData.Title}
          className="movie-img"
        />
      </div>
      <div>
        <h3>{movieData.Title}</h3>
        <p>
          <strong>Year of Release:</strong> {movieData.Year}
        </p>
        <p>
          <strong>Actors:</strong>{" "}
          {movieData.Actors.split(",").map((dt) => (
            <p>{dt}</p>
          ))}
        </p>
        <p>
          <strong>Runtime:</strong> {movieData.Runtime}
        </p>
        <p>
          <strong>Genre:</strong> {movieData.Genre}
        </p>
        <p>
          <strong>Director:</strong> {movieData.Director}
        </p>
        <p>
          <strong>Plot Summary:</strong> {movieData.Plot}
        </p>
      </div>
    </div>
  );
}

export default MovieDetail;
