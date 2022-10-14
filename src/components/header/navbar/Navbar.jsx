import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./navbar.module.css"

const Navbar = () => {

  return (
    <nav>
      <ul className={styles.menuList}>
        <li>
            <NavLink
                to="/"
                end
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
            >
                About
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/furnitures"
            >
                Furnitures
            </NavLink>
        </li>
        <li>
          <NavLink
            to="/testimonial"
          >
                Testimonial
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact-us"
            >
                Contact Us
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/login"
            >
            Login / Register
            </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
