import Parse from "parse";

// READ operation - get all lessons in Parse class Lesson
export const getAllUsers = () => {
    const User = Parse.Object.extend("User");
    const query_user = new Parse.Query(User);
    return query_user.find().then((results) => {
      console.log("results: ", results);
      // returns array of Lesson objects
      return results;
    });
  };
  export let Users = {};
  Users.collection = [];