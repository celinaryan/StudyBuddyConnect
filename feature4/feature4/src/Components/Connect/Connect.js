import React, { useState, useEffect } from "react";
import ReqList from "../Main/ReqList.js";
import { getAllRequests, Requests} from "../../Services/RequestService";

  const Connect = () => {
    // const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
     // console.log("data: ", data);
     // Variables in the state to hold data
     const [reqs, setReqs] = useState([]);
     // UseEffect to run when the page loads to
     // obtain async data and render
     useEffect(() => {
       if (Requests.collection.length) {
         setReqs(Requests.collection);
       } else {
         getAllRequests().then((reqs) => {
           console.log(reqs);
           setReqs(reqs);
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
        <ReqList reqs={reqs} />
        </div>
        
      </section>
    );
  };
  export default Connect;