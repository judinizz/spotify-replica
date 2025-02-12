import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2> Artistas Populares </h2>
          <a className="item-list__link" href="/">
            Mostrar Tudo
          </a>
        </div>
        <div className="item-list__container">
          {/* AQUI */}
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="Foto do artista: Henrique & Juliano"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts"></div>
            <div className="single-item__2lines">
              <p className="single-item__title"> Henrique & Juliano </p>
            </div>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
