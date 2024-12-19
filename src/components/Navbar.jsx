import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand fs-3 fw-normal" to="/">
          Recipe Organiser
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item fs-4 fw-normal">
              <NavLink className="nav-items me-3" aria-current="page" to="/">
                Recipes
              </NavLink>
            </li>
            <li className="nav-item fs-4 fw-normal">
              <NavLink
                className="nav-items"
                aria-current="page"
                to="/recipe/add"
              >
                Add Recipe
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
