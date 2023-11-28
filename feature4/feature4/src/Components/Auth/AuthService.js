import Parse from "parse";
// only include parse in here and in app.js
// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();
  user.set("username", newUser.username);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);
  user.set("phoneNumber", newUser.phoneNumber);
  user.set("university", newUser.university);
  user.set("classYear", newUser.classYear);
  user.set("major", newUser.major);
  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// used in auth login component
// we still set password and username but we pull them (email and password) off and pass those in as arguments for the user.login method
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.username);

  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.username, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// ES6 shorthand - a way to do defensive coding
// if parse.user.current() && parse.user.current().authenticated
export const checkUser = () => {
  const currentUser = Parse.User.current();
  if (currentUser && currentUser.authenticated()) {
    return true;
  } else {
    return false;
  }
};
export const logoutUser = () => {
  return Parse.User.logOut();
};