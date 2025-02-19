import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* Artistas */}
      <ItemList
        title="Artistas Populares"
        items={6}
        itemsArray={artistArray}
        path="/artists"
        idpath="/artist"
      />
      {/* Músicas */}
      <ItemList
        title="Músicas Populares"
        items={12}
        itemsArray={songsArray}
        path="/songs"
        idpath="/song"
      />
    </div>
  );
};

export default Main;
