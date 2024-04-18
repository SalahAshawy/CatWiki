import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import "../App.css";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div class="container logo-container">
      <h1 class="logo">
        <Link to={'/'}>
        <img src={`${process.env.PUBLIC_URL}/images/CatwikiLogo.svg`} alt="" />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
