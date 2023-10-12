import React, { useState, useEffect } from "react";
import MainList from "./MainList.js";
import { getAllLessons, Lessons} from "../../Services/LearnService";



const Main = () => {
 // const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
  // console.log("data: ", data);
  // Variables in the state to hold data
  const [lessons, setLessons] = useState([]);
  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    if (Lessons.collection.length) {
      setLessons(Lessons.collection);
    } else {
      getAllLessons().then((lessons) => {
        console.log(lessons);
        setLessons(lessons);
      });
    }
  }, []);

  return (
    <div>
      
      <div className="db-list">
      <h1>This is the main stateful parent component.</h1>
        <MainList lessons={lessons} />
      </div>
    </div>
  );
};

export default Main;