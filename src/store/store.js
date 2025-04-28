import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create()(
  persist(
    (set, get) => ({
      films: [],
      favorites: [],
      updateFilms: (newFilms) => set({ films: newFilms }),
      updateFavorites: (newFavorites) => set({ favorites: newFavorites }),
      toggleFavorite: (filmId) =>
        set((state) => {
          if (state.favorites.includes(filmId)) {
            return { favorites: state.favorites.filter((id) => id !== filmId) };
          }
          return { favorites: [...state.favorites, filmId] };
        }),
    }),
    { name: "film-storage" }
  )
);

export default useStore;
