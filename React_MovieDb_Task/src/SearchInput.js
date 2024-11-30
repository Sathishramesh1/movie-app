import React, { useEffect, useState } from "react";
import { useSearch } from "./Context/Search";
import { useNavigate } from "react-router-dom";
import { useData } from "./Context/FetchAllMovies";


function SearchInput(){
  const [movies,setMovies] = useData();
  const [search, setSearch]=useSearch()
  const [searchData,setSearchData] = useState("");

  const navigate = useNavigate();

    useEffect(()=>{
         if(searchData == ""){
             navigate("/")
         }
      },[searchData])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const data = movies.filter((dt) =>
        dt.Title.toLowerCase().includes(searchData.toLowerCase().trim())
      );
    console.log(data)

    setSearch(data)
    navigate("/searchData")
  };


  return (
    <div>
      <form
        className="d-flex search-form"
        role="search"
        onSubmit={handleSubmit}
        id="form"
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button className="btn btn-outline-warning" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;