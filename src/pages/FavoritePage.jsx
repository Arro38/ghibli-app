import React from "react";
import FilmList from "../components/FilmList";

export default function FavoritePage({ films, toggleFavorite, favorites }) {
  return (
    <>
      <h1>FavoritePage</h1>
      <FilmList
        films={films}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </>
  );
}
