import { useEffect, useState } from "react";
import { getAllUsers, Users } from "../../Services/LearnService";

/* STATEFUL PARENT COMPONENT */
const MainList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch lessons or populate lessons state here
    // For example, using the getAllLessons function
    getAllUsers()
      .then((usersData) => {
        setUsers(usersData);
      })
      .catch((error) => {
        console.error("Error fetching users: ", error);
      });
  }, []);

  return (
    <div>
      <hr />
      Users in the Database:
      <div>
        <p> Users: </p>
        {/* Check that the lessons array exists and has a length greater than 0 */}
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {" "}
                {user.id} | {user.get("firstName")}{" "}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users available.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
