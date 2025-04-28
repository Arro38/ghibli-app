import React from "react";
import FilmList from "../components/FilmList";

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <FilmList isFavoritePage={false} />
    </>
  );
}
