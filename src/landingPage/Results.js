import React from "react";
import Result from "./Result";

export default function Results({ results, openPopup }) {
  return (
    <>
      <section className="results">
        {results.map((result) => (
          <Result
            key={result.imdbID}
            result={result}
            openPopup={() => openPopup(result.imdbID)}
          />
        ))}
      </section>
    </>
  );
}
