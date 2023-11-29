import React, { useState, useEffect } from "react";
import ReqList from "../Main/ReqList.js";
import { getAllRequests, Requests} from "../../Services/RequestService";
import CourseForm from "./CourseForm.js";
  const Connect = () => {
    const [reqs, setReqs] = useState([]);
    const [courses, setCourses] = useState([]);
    const [user, setUser] = useState({ canHelp: [], needHelp: [] });

    // const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
     // console.log("data: ", data);
     // Variables in the state to hold data

      const onChange = (_e) => {
        console.log('onChange called');
      }
   
  // on this page students can connect and chat with other users who they matched with
    return (
      <section>
        <div className="centerText">
        <h1>Buddy Finder</h1>
        <p> Fill out the forms below so we can connect you with other students that can help you and you can help! </p>
        </div>
        <div className="db-list">
        <CourseForm courses={courses} user={user} setUser={setUser} onChange={onChange}/>
        <ReqList reqs={reqs} />
        </div>
        
      </section>
    );
  };
  export default Connect;