import React from "react";
import FilmCard from "./FilmCard";

export default function FilmList({ films, toggleFavorite, favorites }) {
  return (
    <section className="film-list">
      {films.map((film) => (
        <FilmCard
          film={film}
          key={film.id}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.includes(film.id)}
        />
      ))}
    </section>
  );
}
