import React from "react";
import logoSpotify from "../assets/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>
      <Link className="header__link" href="/">
        <h1> Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
