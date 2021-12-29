import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

import { GiArcingBolt } from "react-icons/gi";
const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  return (
    <div style={{ fontFamily: "Besley" }}>
      <nav
        class="navbar navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "black" }}
      >
        <div class="container-fluid ps-5 pt-3">
          <p>
            {" "}
            <span className="name1">
              {"  "}
              <GiArcingBolt sx={{ fontSize: 20 }} /> BaLi
            </span>{" "}
            <span className="name2 "> Resort </span>
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 m-3">
              <li class="nav-item mx-2">
                <NavLink to="/" class="nav-link active" aria-current="page">
                  <span className="name3">Home</span>
                </NavLink>
              </li>

              <li class="nav-item mx-2">
                <Link to="/resort" class="nav-link active">
                  <span className="name3">Resort</span>
                </Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/dashboard" class="nav-link active">
                  <span className="name3">Dashboard</span>
                </Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/login" class="nav-link active">
                  <span className="name3">Log In</span>
                </Link>
              </li>

              {localStorage.getItem("user") ? (
                <div className="dropdown">
                  <a
                    className="btn btn-danger dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href
                  >
                    {(user && user.name) || user.displayName || user.email}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href onClick={logout}>
                        Log-Out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
