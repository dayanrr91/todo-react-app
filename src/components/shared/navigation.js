// Navigation.js
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <Container className="navigation__container">
      <div className="navigation__logo">Logo</div>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" to="/">
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/about">
            About Us
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/login">
            Login
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/register">
            Regiser
          </Link>
        </li>
      </ul>
    </Container>
  </nav>
);

export default Navigation;
