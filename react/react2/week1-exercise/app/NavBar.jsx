"use client";
import React from "react";
import styles from "./page.module.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <Link to="/" className={location.pathname === "/" ? styles.active : ""}>
        Home
      </Link>
      <Link
        to="/form"
        className={location.pathname === "/form" ? styles.active : ""}
      >
        Form
      </Link>
      <Link
        to="/blogs"
        className={location.pathname === "/blogs" ? styles.active : ""}
      >
        Blogs
      </Link>
      <Link
        to="/nasa"
        className={location.pathname === "/nasa" ? styles.active : ""}
      >
        Nasa
      </Link>
      <Link
        to="/epic"
        className={location.pathname === "/epic" ? styles.active : ""}
      >
        Epic
      </Link>
    </div>
  );
}
