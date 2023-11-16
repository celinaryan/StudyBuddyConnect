import MainList from '../Main/MainList';
import React, { useEffect, useState } from "react";
import "../../index.css"
import { checkUser } from "../Auth/AuthService";
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userAuthenticated = checkUser();
    setIsLoggedIn(userAuthenticated);
  }, []);

  useEffect(() => {
    const userAuthenticated = checkUser();
    setIsLoggedIn(userAuthenticated);
  }, [isLoggedIn]);

    // Add the home-background class to the body element
    useEffect(() => {
      document.body.classList.add("home-background");
  
      // Remove the class when the component is unmounted
      return () => {
        document.body.classList.remove("home-background");
      };
    }, []);

    return (
      <section className="home-page">
        <div className="centerText">
        <h1> study buddy connect </h1>
        <p>empowering college students through collaborative learning and connections
      for academic success </p>
      
       
      {!isLoggedIn ? (
        <div className="home-login-options">
          <p>New to Study Buddy Connect? <a href="/auth/register">Register Here.</a></p>
          <p>Already a member? <a href="/auth/login">Login Here.</a></p>
          </div>
            ) : null}
      </div>
    
      <MainList/>
      </section>
    );
  };
  export default Home;