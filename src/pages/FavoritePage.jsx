import React from "react";
import FilmList from "../components/FilmList";

export default function FavoritePage() {
  return (
    <>
      <h1>FavoritePage</h1>
      <FilmList isFavoritePage={true} />
    </>
  );
}
