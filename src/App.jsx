import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmDetailPage from "./pages/FilmDetailPage";
import FavoritePage from "./pages/FavoritePage";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [films, setFilms] = useState([]);
  const localFavorites = JSON.parse(localStorage.getItem("favorites"));
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [sortMethod, setSortMethod] = useState("");
  // Fonction pour récupérer les films (à compléter)
  const getFilms = async () => {
    const request = await fetch("https://ghibliapi.vercel.app/films");
    const d = await request.json();
    setData(d);
    setFilms(d);
  };

  const toggleFavorite = (filmId) => {
    if (favorites.includes(filmId)) {
      setFavorites(favorites.filter((id) => id !== filmId));
    } else {
      setFavorites([...favorites, filmId]);
    }
  };
  // useEffect pour charger les films au démarrage (à compléter)
  useEffect(() => {
    getFilms();
  }, []);

  useEffect(() => {
    if (search != "") {
      var copy = [...data];
      copy = copy.filter((film) =>
        film.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilms(copy);
    } else {
      setFilms(data);
    }
  }, [search]);

  useEffect(() => {
    if (sortMethod != "") {
      var copy = [...films];
      if (sortMethod == "date") {
        copy = copy.sort((f1, f2) => f1.release_date - f2.release_date);
      } else if (sortMethod == "title") {
        copy = copy.sort((f1, f2) => f1.title.localeCompare(f2.title));
      } else if (sortMethod == "score") {
        copy = copy.sort((f1, f2) => f1.rt_score - f2.rt_score);
      }
      setFilms(copy);
    }
  }, [sortMethod]);

  useEffect(() => {
    let jsonFavorites = JSON.stringify(favorites);
    localStorage.setItem("favorites", jsonFavorites);
  }, [favorites]);

  useEffect(() => {
    if (localFavorites) {
      setFavorites(localFavorites);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Header setSearch={setSearch} setSortMethod={setSortMethod} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                films={films}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            }
          />
          <Route path="/film/:id" element={<FilmDetailPage films={films} />} />
          <Route
            path="/favorites"
            element={
              <FavoritePage
                films={films.filter((film) => favorites.includes(film.id))}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
