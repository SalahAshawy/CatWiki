// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
      <div className="col-12">
        <Link
          to="/dashboard/create-new"
          className="suggestion-link  text-white navbar-brand fw-bold fs-4 d-flex justify-content-center"
        >
          Create New Cat <i className="fa fa-plus mt-2 mx-3"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
