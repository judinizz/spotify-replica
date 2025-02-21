import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Song = () => {
  const { id } = useParams();
  const songObj = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  )[0];
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === songObj.artist
  )[0];
  const songsArrayfromArtist = songsArray.filter(
    (currentValue) => currentValue.artist === artistObj.name
  );
  const randomIdfromArtist = Math.floor(
    Math.random() * (songsArrayfromArtist.length - 1)
  );
  const randomIdfromArtist2 = Math.floor(
    Math.random() * (songsArrayfromArtist.length - 1)
  );

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src={songObj.image}
            alt={`Imagem da musica ${songObj.name}`}
          ></img>
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          <img
            src={artistObj.image}
            alt={`Imagem do artista ${artistObj.name}`}
          ></img>
        </Link>
        <Player
          duration={songObj.duration}
          randomIdFoward={randomIdfromArtist}
          randomIdBackward={randomIdfromArtist2}
        />
        <div>
          <p className="song__name">{songObj.name}</p>
          <p>{artistObj.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
