import { useEffect, useState } from "react";
import { getAllLessons, Lessons } from "../../Services/LearnService";

/* STATEFUL PARENT COMPONENT */
const MainList = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Fetch lessons or populate lessons state here
    // For example, using the getAllLessons function
    getAllLessons()
      .then((lessonsData) => {
        setLessons(lessonsData);
      })
      .catch((error) => {
        console.error("Error fetching lessons: ", error);
      });
  }, []);

  return (
    <div>
      <hr />
      <h2>Classes you can find a buddy for:</h2>
      <div>
        <p> Don't see the class you need help with? You can always add a new one! </p>
        {/* Check that the lessons array exists and has a length greater than 0 */}
        {lessons.length > 0 ? (
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson.id}>
                {" "}
                {lesson.get("ClassName").slice(1,-1)}{" "}
              </li>
            ))}
          </ul>
        ) : (
          <p>No classes available.</p>
        )}
      </div>
    </div>
  );
};

export default MainList;
