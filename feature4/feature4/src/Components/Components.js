import React from "react";
import Main from "./Main/Main.js";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Header from "./Header/Header.js";
import Login from "./Login/Login.js";
import Signup from "./Signup/Signup.js";
import Connect from "./Connect/Connect.js";
import YourMatches from "./YourMatches/YourMatches.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Components = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/yourmatches" element={<YourMatches />} />
      </Routes>
    </Router>
  );
};

export default Components;
