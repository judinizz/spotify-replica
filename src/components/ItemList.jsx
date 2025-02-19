import React from "react";
import SingleItem from "./SingleItem";
import { artistArray } from "../assets/database/artists";
import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idpath }) => {
  return (
    <div>
      <div className="item-list">
        <div className="item-list__header">
          <h2> {title} </h2>
          <Link className="item-list__link" to={path}>
            Mostrar Tudo
          </Link>
        </div>
        <div className="item-list__container">
          {itemsArray
            .filter((currentValue, index) => index < items)
            .map((currObj, index) => (
              <SingleItem
                idpath={idpath}
                {...currObj}
                key={`${title} - ${index}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
