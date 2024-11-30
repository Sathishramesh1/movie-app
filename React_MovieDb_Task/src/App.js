import "./App.css";
import SearchData from "./SearchData";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import Favorites from "./Favorites";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/search" element={<SearchData />} />
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/searchData" element={<SearchData />} />
      </Routes>
    </div>
  );
}

export default App;
