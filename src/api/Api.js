import React, { useState } from "react";
import "./Api.css";
import ftApi1 from "../foto/icon1ygy.png";
import ftApi2 from "../foto/icon2ygy.png";
import axios from "axios";
import MovieComponent from "./component/MovieComponent";
import MovieInfoComponent from "./component2/MovieInfoComponent";

export const API_KEY = "a9118a3a";
export default function Api() {
  const [searchQuery, setSearchQuery] = useState("");
  const [timeoutId, setTimeoutID] = useState();
  const [movieLIst, setMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    setMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    setSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    setTimeoutID(timeout);
  };

  return (
    <>
      <div className="Container">
        <div className="headerApi">
          <img className="ftNavApi" src={ftApi1} alt="foto" />
          <div className="AppName">React Movie App</div>
          <div className="searchBoxApi">
            <img src={ftApi2} alt="" className="searchIconApi" />
            <input
              type="text"
              className="inputNavApi"
              placeholder="Search Movie"
              value={searchQuery}
              onChange={onTextChange}
            />
          </div>
        </div>
        {selectedMovie && (
          <MovieInfoComponent
            selectedMovie={selectedMovie}
            onMovieSelect={onMovieSelect}
          />
        )}
        <div className="movieListContainer">
          {movieLIst?.length ? (
            movieLIst.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                onMovieSelect={onMovieSelect}
              />
            ))
          ) : (
            <img className="placeholders" src={ftApi1} alt="foto" />
          )}
        </div>
      </div>
    </>
  );
}
