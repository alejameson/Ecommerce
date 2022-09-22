import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  return (
    <div className="navContainer">
      <nav>
        <ul>
          <Link to="/" className="navButton">
            <li>
              <h3>Home </h3>
              <HomeIcon sx={{ marginLeft: "5px" }} />
            </li>
          </Link>
          <Link to="/" className="navButton">
            <li>
              <h3>Products </h3>
              <LocalMallIcon sx={{ marginLeft: "5px" }} />
            </li>
          </Link>
        </ul>
        <img
          src="https://seeklogo.com/images/Y/yellow-pages-turkey-logo-6D09162597-seeklogo.com.png"
          alt="Banner"
          width="75"
          height="60"
        />
        <ul>
          <Link to="/cart" className="navButton">
            <li>
              <h3>Shop Cart </h3>
              <ShoppingCartIcon sx={{ marginLeft: "5px" }} />
            </li>
          </Link>
          <li>
            <h3>About </h3>
            <InfoIcon sx={{ marginLeft: "5px" }} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
