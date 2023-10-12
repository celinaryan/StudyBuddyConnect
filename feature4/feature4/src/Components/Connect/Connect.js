import React, { useState, useEffect } from "react";
import UserList from "../Main/UserList.js";
import { getAllUsers, Users} from "../../Services/UserService";

  const Connect = () => {
    // const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
     // console.log("data: ", data);
     // Variables in the state to hold data
     const [users, setUsers] = useState([]);
     // UseEffect to run when the page loads to
     // obtain async data and render
     useEffect(() => {
       if (Users.collection.length) {
         setUsers(Users.collection);
       } else {
         getAllUsers().then((users) => {
           console.log(users);
           setUsers(users);
         });
       }
     }, []);
   
  // on this page students can connect and chat with other users who they matched with
    return (
      <section>
        <div className="centerText">
        <h1> Connect with other students </h1>
        <p> This is the connect component </p>
        </div>
        <div className="db-list">
        <UserList users={users} />
        </div>
        
      </section>
    );
  };
  export default Connect;