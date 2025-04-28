import React from "react";
import FilmCard from "./FilmCard";
import useStore from "../store/store";

export default function FilmList({ isFavoritePage }) {
  let films = useStore((state) => state.films);
  let favorites = useStore((state) => state.favorites);
  if (isFavoritePage == true) {
    films = films.filter((film) => favorites.includes(film.id));
  }
  return (
    <section className="film-list">
      {films.map((film) => (
        <FilmCard film={film} key={film.id} />
      ))}
    </section>
  );
}
