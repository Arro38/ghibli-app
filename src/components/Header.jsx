import React from "react";

export default function Header({ setSearch, setSortMethod }) {
  return (
    <div>
      <input
        type="text"
        onInput={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Film title"
      />
      <div className="sort-container">
        <button onClick={() => setSortMethod("date")}>Date</button>
        <button onClick={() => setSortMethod("title")}>Titre</button>
        <button onClick={() => setSortMethod("score")}>Score</button>
      </div>
    </div>
  );
}
