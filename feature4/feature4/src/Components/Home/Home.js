import studentImg from '../images/overhead pic of studying.webp';
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

    return (
      <section>
        <div className="centerText">
        <h1> Welcome to Study Buddy Connect! </h1>
        <p> Empowering college students through collaborative learning and connections
      for academic success. </p>
      
       
      <img src={studentImg} alt="students studying" width={900} />
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