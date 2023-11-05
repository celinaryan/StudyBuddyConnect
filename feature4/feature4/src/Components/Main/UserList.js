import { useEffect, useState } from "react";
import { getAllUsers, Users } from "../../Services/UserService";
import "../../index.css"
/* STATEFUL PARENT COMPONENT */
const UserList = () => {
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
    <div className="noncentered-body">
      Users in the Database:
      <div>
        <p> Users: </p>
        {/* Check that the lessons array exists and has a length greater than 0 */}
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {" "}
                {user.get("firstName").slice(1,-1)} {user.get("lastName").slice(1,-1)}{" | School: "} {user.get("university").slice(1,-1)}{" | Year: "}{user.get("classYear").slice(1,-1)}{" | Major: "} {user.get("major").slice(1,-1)}{" "}
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
