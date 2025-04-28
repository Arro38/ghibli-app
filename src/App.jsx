import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmDetailPage from "./pages/FilmDetailPage";
import FavoritePage from "./pages/FavoritePage";
import Header from "./components/Header";
import useStore from "./store/store";

function App() {
  const [search, setSearch] = useState("");
  const [sortMethod, setSortMethod] = useState("");

  //Zustand
  const updateFilms = useStore((state) => state.updateFilms);
  const films = useStore((state) => state.films);

  // Fonction pour récupérer les films (à compléter)
  const getFilms = async () => {
    const request = await fetch("https://ghibliapi.vercel.app/films");
    const d = await request.json();
    updateFilms(d);
  };

  // useEffect pour charger les films au démarrage (à compléter)
  useEffect(() => {
    if (!films.length) getFilms();
  }, []);

  // useEffect(() => {
  //   if (search != "") {
  //     var copy = [...data];
  //     copy = copy.filter((film) =>
  //       film.title.toLowerCase().includes(search.toLowerCase())
  //     );
  //     updateFilms(copy);
  //   } else {
  //     updateFilms(data);
  //   }
  // }, [search]);

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
      updateFilms(copy);
    }
  }, [sortMethod]);

  return (
    <BrowserRouter>
      <Navbar />
      <Header setSearch={setSearch} setSortMethod={setSortMethod} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/film/:id" element={<FilmDetailPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
