import "./MovieComponent.css";
// import MovieInfoComponent from "../component2/MovieInfoComponent";

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <>
      <div
        className="movieContainer"
        onClick={() => props.onMovieSelect(imdbID)}
      >
        <img src={Poster} alt="" className="coverImage" />
        <span className="movieName">{Title}</span>
        <div className="infoColumn">
          <span className="movieInfo">Year: {Year}</span>
          <span className="movieInfo">Type: {Type}</span>
        </div>
      </div>
    </>
  );
};
export default MovieComponent;
