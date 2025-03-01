import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({ _id, name, image, duration, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p className="song-item__index"> {index + 1}</p>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Imagem da música ${name}`}
          ></img>
          <p className="song-item__name">{name}</p>
        </div>
      </div>
      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
