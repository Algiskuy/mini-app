import React from "react";
import "./Search.css";

export default function Search({ handleInput, search }) {
  return (
    <>
      <section className="searchbox-wrap">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="searchBox"
          onChange={handleInput}
          onKeyPress={search}
        />
      </section>
    </>
  );
}
