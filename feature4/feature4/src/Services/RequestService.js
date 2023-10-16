import Parse from "parse";

export const getAllRequests = () => {
    const Request = Parse.Object.extend("Request");
    const query_req = new Parse.Query(Request);
    query_req.include("user"); // Include the user object in the query
    query_req.include("canHelpWith"); // Include the "canHelpWith" pointer column
    query_req.include("needHelpWith"); // Include the "needHelpWith" pointer column
  
    return query_req.find().then(async (results) => {
      console.log("Requests in the Database:");
      console.log("Requests:");
  
      for (let i = 0; i < results.length; i++) {
        const request = results[i];
        const user = request.get("user");
        const canHelpWith = request.get("canHelpWith");
        const needHelpWith = request.get("needHelpWith");
  
        const userName = user ? user.get("firstName") : "Unknown";
        const canHelpWithClassName = canHelpWith ? canHelpWith.get("className") : "Unknown";
        const needHelpWithClassName = needHelpWith ? needHelpWith.get("className") : "Unknown";
  
        console.log("Request ID: ", request.id);
        console.log("User First Name: ", userName);
        console.log("Can Help With Class: ", canHelpWithClassName);
        console.log("Need Help With Class: ", needHelpWithClassName);
      }
  
      return results;
    });
  };
  

export const getUserById = (objectId) => {
  const User = Parse.Object.extend("User");
  const query_user = new Parse.Query(User);
  return query_user.get(objectId).then((user) => {
    console.log("user: ", user);
    // returns User object
    return user;
  });
};

export const getClassById = (objectId) => {
  const Classes = Parse.Object.extend("Classes");
  const query_class = new Parse.Query(Classes);
  return query_class.get(objectId).then((classObj) => {
    console.log("classObj: ", classObj);
    // returns Classes object
    return classObj;
  });
};

export let Requests = {};
Requests.collection = [];