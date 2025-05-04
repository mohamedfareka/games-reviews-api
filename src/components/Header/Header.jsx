import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="mmorpg">
          games
        </Link>
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="mmorpg">
                mmorpg
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="shooter">
                shooter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="permadeath">
                permadeath
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="superhero">
                superhero
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="pixel">
                pixel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="sailing">
                sailing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
