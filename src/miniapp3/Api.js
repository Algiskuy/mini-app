// import React from "react";
// // import { useState } from "react";
// import "./Api.css";

// export default function Api() {
//   const [news, setNews] = React.useState([]);

//   React.useEffect(function () {
//     async function getData() {
//       const request = await fetch(
//         "https://api.spaceflightnewsapi.net/v3/blogs"
//       );
//       const response = await request.json();

//       setNews(response);
//     }
//     getData();
//   }, []);
//   return (
//     <>
//       <h1 className="Api">Api Fecth</h1>
//       <ul>
//         {news.map(function (item) {
//           return <li key={item.id}>{item.title}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

// // export default function Api() {
// //   React.useEffect(function () {
// //     const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
// //       .then(function (response) {
// //         return response.json();
// //       })
// //       .then(function (response) {
// //         console.log(response);
// //       });
// //     console.log(getData);
// //   }, []);
// //   return (
// //     <>
// //       <h1 className="Api">Api Fecth</h1>
// //     </>
// //   );
// //
// // }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
          <div className="searchBox">
            <img src={ftApi2} alt="" className="searchIcon" />
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

// {/* <ul>
//   <li className="movieContainer">
//     <MovieComponent />
//   </li>
//   <li className="movieContainer">
//     <MovieComponent />
//   </li>
//   <li className="movieContainer">
//     <MovieComponent />
//   </li>
//   <li className="movieContainer">
//     <MovieComponent />
//   </li>
// </ul> */}
// <div className="movieContainer2">
//   <MovieComponent />
// </div>
// <div className="movieContainer2">
//   <MovieComponent />
// </div>
// <div className="movieContainer2">
//   <MovieComponent />
// </div>
// <div className="movieContainer2">
//   <MovieComponent />
// </div>
