import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {/* Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas Populares"
          items={6}
          itemsArray={artistArray}
          path="/artists"
          idpath="/artist"
        />
      ) : (
        <></>
      )}

      {/* Músicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas Populares"
          items={12}
          itemsArray={songsArray}
          path="/songs"
          idpath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
