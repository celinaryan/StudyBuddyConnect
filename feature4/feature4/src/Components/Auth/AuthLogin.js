import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
const AuthLogin = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  // new user object only has two properties
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // each useEffect covers a different scenario
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  // useEffect that runs when changes are made to the state variable flags
  useEffect(() => {
    if (currentUser && add) {
      loginUser(currentUser)
        .then((userLoggedIn) => {
          if (userLoggedIn) {
            alert(`${userLoggedIn.get("firstName")}, you successfully logged in!`);
            navigate("/");
          }
          // TODO: redirect user to main app
          setAdd(false);
        })
        .catch((error) => {
          console.log("Login Error: ", error);
        });
    }
  }, [navigate, currentUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  return (
    <div>
      <h2>Login Here</h2>
      <AuthForm
        user={currentUser}
        isLogin={true}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthLogin;