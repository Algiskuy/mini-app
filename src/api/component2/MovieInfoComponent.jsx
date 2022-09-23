import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../Api";
import "./MovieInfoComponent.css";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className="MovieInfoComponent">
      {movieInfo ? (
        <>
          <img src={movieInfo?.Poster} alt="" />
          <div className="infoColumnMIC">
            <span className="movieName">
              {movieInfo?.Type} : {movieInfo?.Title}
            </span>
            <span className="MovieInfo">
              IMDB Rating :{" "}
              <span className="spanMI">{movieInfo?.imdbRating}</span>
            </span>
            <span className="MovieInfo">
              Year : <span className="spanMI">{movieInfo?.Year}</span>
            </span>
            <span className="MovieInfo">
              Language : <span className="spanMI">{movieInfo?.Language}</span>
            </span>
            <span className="MovieInfo">
              Rated : <span className="spanMI">{movieInfo?.Rated}</span>
            </span>
            <span className="MovieInfo">
              Released : <span className="spanMI">{movieInfo?.Released}</span>
            </span>
            <span className="MovieInfo">
              Runtime : <span className="spanMI">{movieInfo?.Runtime}</span>
            </span>
            <span className="MovieInfo">
              Genre : <span className="spanMI">{movieInfo?.Genre}</span>
            </span>
            <span className="MovieInfo">
              Director : <span className="spanMI">{movieInfo?.Director}</span>
            </span>
            <span className="MovieInfo">
              Actors : <span className="spanMI">{movieInfo?.Actors}</span>
            </span>
            <span className="MovieInfo">
              Plot : <span className="spanMI">{movieInfo?.Plot}</span>
            </span>
          </div>
          <span onClick={() => props.onMovieSelect()} className="close">
            X
          </span>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default MovieInfoComponent;
