import React from "react";
import { Link } from "react-router-dom";

export default function FilmCard({ film, toggleFavorite, isFavorite }) {
  return (
    <div className="film-card">
      {/* l'image, le titre, le réalisateur et l'année de sortie du film */}
      <img src={film.image} alt={film.title} className="film-image" />
      <button
        onClick={() => {
          toggleFavorite(film.id);
        }}
      >
        {isFavorite ? "★" : "☆"}
      </button>
      <h3>{film.title} </h3>
      <p>Réalisateur : {film.director} </p>
      <p>Année :{film.release_date}</p>
      <Link to={"/film/" + film.id}>Voir plus</Link>
    </div>
  );
}
