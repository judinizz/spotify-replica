import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idpath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div>
      <div className="item-list">
        <div className="item-list__header">
          <h2> {title} </h2>
          {isHome ? (
            <Link className="item-list__link" to={path}>
              Mostrar Tudo
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className="item-list__container">
          {itemsArray
            .filter((currentValue, index) => index < finalItems)
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
