import React from "react";
import { Link } from "react-router-dom";
import useStore from "../store/store";

export default function FilmCard({ film }) {
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const favorites = useStore((state) => state.favorites);
  return (
    <div className="film-card">
      {/* l'image, le titre, le réalisateur et l'année de sortie du film */}
      <img src={film.image} alt={film.title} className="film-image" />
      <button
        onClick={() => {
          toggleFavorite(film.id);
        }}
      >
        {favorites.includes(film.id) ? "★" : "☆"}
      </button>
      <h3>{film.title} </h3>
      <p>Réalisateur : {film.director} </p>
      <p>Année :{film.release_date}</p>
      <Link to={"/film/" + film.id}>Voir plus</Link>
    </div>
  );
}
