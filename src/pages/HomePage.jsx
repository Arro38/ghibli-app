import React from "react";
import FilmList from "../components/FilmList";

export default function HomePage({ films, toggleFavorite, favorites }) {
  return (
    <>
      <h1>HomePage</h1>
      <FilmList
        films={films}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </>
  );
}
