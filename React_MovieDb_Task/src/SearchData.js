import { useSearch } from "./Context/Search.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function SearchData() {
  const [search, setSearch] = useSearch();

  const navigate = useNavigate();

  return (
    <div className="search-main-container">
      <div className="search-container">
        {search && search.length > 0 ? (
          search.map((movie, index) => {
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
                    {/* <p
                                onClick={() => manageFavorite(movie.imdbID)}
                                style={{
                                    color: isFavorite ? "red" : "blue",
                                    cursor: "pointer",
                                }}
                            >
                                {isFavorite ? "♥ Remove from Favorites" : "+ Add to Favorites"}
                            </p> */}
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <div className="msg">"No Movies Found..!" </div>
        )}
      </div>
    </div>
  );
}
export default SearchData;
