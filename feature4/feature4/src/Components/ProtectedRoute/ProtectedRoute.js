import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
    console.log("element: ", Component);
    const navigate = useNavigate();
    const goBackHandler = () => {
      navigate("/auth");
    };
    if (checkUser()) {
      return <Component />;
    } else {
      return (
        <div>
          <p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
        </div>
      );
    }
  };
  
  export default ProtectedRoute;