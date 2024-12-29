import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assest/orekelog.ico";

const Navbar = () => {
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

  const handlePostClick = () => {
    const isLoggedIn = sessionStorage.getItem("userData");

    if (isLoggedIn) {
      window.location.href = "/post-content";
    } else {
      window.location.href = "/login";
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    window.location.href = "/";
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
    <div>
      <section className="navbar1">
        <div className="logo">
          <Link to="/">
            <h3>
              <img id="orekelogo" src={logo} alt="" />
              Oreke's Kitchen
            </h3>
          </Link>
        </div>
        <div className="nav1-items">
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/menu"> Menu </Link>
            </li>
            <li>
              <Link to="/cart">Order</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/feedback"> Customer's Feedback</Link>
            </li>

            <div>
              {isLoggedIn && (
                <div className="dropdown">
                  <li onClick={toggleMenu} className="dropdown-toggle">
                    {user?.result?.username}
                  </li>
                  {isOpen && (
                    <ul className="dropdown-menu">
                      <li className="dropdown-lists">
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
        </div>

        {/* <div>
          <button id="post-contentBtn">
            <Link onClick={handlePostClick}>Post</Link>
          </button>
        </div> */}
      </section>
    </div>
  );
};

export default Navbar;
