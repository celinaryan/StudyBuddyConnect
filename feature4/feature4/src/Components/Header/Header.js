import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkUser, logoutUser } from "../Auth/AuthService";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(checkUser());

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setIsLoggedIn(checkUser());
      })
      .catch((error) => {
        console.error("Logout Error: ", error);
      });
  };

  useEffect(() => {
    // This will constantly check the user status every second
    const intervalID = setInterval(() => setIsLoggedIn(checkUser()), 1000);

    // This function will run when component unmounts. Cleaning up the interval.
    return () => clearInterval(intervalID);
  }, []);

  return (
    <header>
      <div className="nav-bar-container">
        <nav>
            {isLoggedIn ? (
              <ul className="navigation">
                <li>
              <Link to="/">Home</Link>
            </li>
                   <li>
                    <Link to="/buddyfinder">Buddy Finder</Link>
                  </li>
                  <li>
                    <Link to="/buddychatroom">Buddy Chatroom</Link>
                  </li>
                  <li>
                    <button type="submit" className="btn btn-primary" onClick={handleLogout}>Logout</button>
                  </li>
                  </ul>
            ) : 
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
            </ul>
            }
        
        </nav>
      </div>
    </header>
  );
};

export default Header;