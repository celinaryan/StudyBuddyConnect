// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { checkUser } from "../Auth/AuthService";

// // You can pass props using the spread operator to throw them on an object if there are too many to break out
// const ProtectedRoute = ({ element: Component, ...rest }) => {
//     console.log("element: ", Component);
//     const navigate = useNavigate();
//     const goBackHandler = () => {
//       navigate("/auth");
//     };
//     if (checkUser()) {
//       return <Component />;
//     } else {
//       return (
//         <div>
//           <p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
//         </div>
//       );
//     }
//   };
  
//   export default ProtectedRoute;

  // ProtectedRoute.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/");
  };

  if (checkUser()) {
    return children;
  } else {
    return (
      <div className="course-form">
        <p>Unauthorized!</p>{" "}
        <button type="submit" className="btn btn-primary" onClick={goBackHandler}>Go Home</button>
      </div>
    );
  }
};

export default ProtectedRoute;