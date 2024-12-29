import React, { useState, useEffect, useRef } from "react";
import "./Navibar.css";
import { Link } from "react-router-dom";
import logo from "../../assest/orekelog.ico";
import { FaBars, FaTimes } from "react-icons/fa";

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navbarRef = useRef(null);
  const toggleNavbar = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = sessionStorage.getItem("userData");
      return token !== null && token !== undefined;
    };

    setIsLoggedIn(checkLoginStatus());
  }, []);

  const handleButtonClick = () => {
    const isLoggedIn = sessionStorage.getItem("userData");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    window.location.href = "/";
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = sessionStorage.getItem("userData");

    // console.log("userData:", userData);

    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData);
      // console.log("user:", parsedData);
    }
  }, []);

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`} ref={navbarRef}>
      <div className="navbar-brand">
        <Link to="/">
          <h3>
            <img id="orekelogo" src={logo} alt="" />
            Oreke's Kitchen
          </h3>
        </Link>
      </div>
      <button className="navbar-toggle " onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link className="nav-link" onClick={toggleNavbar} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={toggleNavbar} to="/menu">
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={toggleNavbar} to="/cart">
            Order
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={toggleNavbar} to="/about-us">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={toggleNavbar} to="/feedback">
            Customer's feedback
          </Link>
        </li>

        <div>
          {isLoggedIn && (
            <div className="dropdown">
              <li onClick={toggleMenu} className="dropdown-toggle">
                {user?.result?.username}
              </li>
              {isOpen && (
                <ul className="dropdown-menu">
                  <li className="">
                    <Link
                      to={`/profile/${user?.result?.fullname}`}
                      onClick={handleButtonClick}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="" onClick={handleLogout}>
                    Log Out
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navibar;
