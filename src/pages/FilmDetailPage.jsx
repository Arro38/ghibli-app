import { useParams } from "react-router-dom";
export default function FilmDetailPage({ films }) {
  const { id } = useParams();
  const film = films.find((film) => film.id === id);
  if (!film) {
    return <div>Chargement...</div>;
  }
  return (
    <div className="film-detail">
      {/* l'image, le titre, le réalisateur et l'année de sortie du film */}
      <img src={film.image} alt={film.title} className="film-image" />
      <h3>{film.title} </h3>
      <p>Réalisateur : {film.director} </p>
      <p>Année :{film.release_date}</p>
      <p>{film.description}</p>
    </div>
  );
}
