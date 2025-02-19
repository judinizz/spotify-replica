import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ id, name, image, artist, idpath }) => {
  return (
    <div>
      <Link to={`${idpath}/${id}`} className="single-item">
        <div className="single-item__div-image-button">
          <div className="single-item__div-image">
            <img
              className="single-item__image"
              src={image}
              alt={`Foto do artista ${name}`}
            />
          </div>
          <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
        </div>

        <div className="single-item__texts"></div>
        <div className="single-item__2lines">
          <p className="single-item__title"> {name} </p>
        </div>
        <p className="single-item__type">{artist ?? "Artista"}</p>
      </Link>
    </div>
  );
};

export default SingleItem;
