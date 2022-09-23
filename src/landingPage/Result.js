import React from "react";

export default function Result({ result, openPopup }) {
  return (
    <>
      <div className="result" onClick={openPopup}>
        <img className="img-result" src={result.Poster} alt="" />
        <h3>{result.Title}</h3>
      </div>
    </>
  );
}
