import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkUser, logoutUser } from "../Auth/AuthService";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userAuthenticated = checkUser();
    setIsLoggedIn(userAuthenticated);
  }, []);

  useEffect(() => {
    const userAuthenticated = checkUser();
    setIsLoggedIn(userAuthenticated);
  }, [isLoggedIn]);

  const handleLogout = () => {
    logoutUser()
    .then(() => {
      setIsLoggedIn(false);
    })
    .catch((error) => {
      // Handle any error that occurs during logout
      console.error("Logout Error: ", error);
    });
  };

  return (
    <header>
      <div className="nav-bar-container">
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            
            <li>
              <Link to="/connect">Connect</Link>
            </li>
            <li>
              <Link to="/yourmatches">Your Matches</Link>
            </li>
            {isLoggedIn ? (
                  <li>
                    <button type="submit" className="btn btn-primary" onClick={handleLogout}>Logout</button>
                  </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;