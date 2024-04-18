
import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container bg-dark footer-container ">
        <div className="row footer justify-content-between align-items-end">
          <div className="col-md-6">
          <img  src={`${process.env.PUBLIC_URL}/assests/catWikiLogoWhite.svg`} width="100" height="30" className="logo-text"  alt="" />
          </div>
          <div className="col-md-6 ">
            <p className="text-right custom-color">© created by <span className="author">Salah </span> devChallenge.io 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
