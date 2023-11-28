# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Feature 4: Added Routing and Parsing and data to the database through back4App

### Fixed

- N/A as of 10/12/23

## [0.2.0] - 2023-10-12

### Changed

- N/A as of 10/12/23

### Deprecated

- N/A as of 10/12/23

### Removed

- N/A as of 10/12/23

### Added

- Feature 5: Adding ProtectedRoute Component, More Routing, Parse Auth Service, and Authentication

### Fixed

- N/A as of 11/02/23

## [0.3.0] - 2023-11-02

### Changed

- N/A as of 11/02/23

### Deprecated

- N/A as of 11/02/23

### Removed

- N/A as of 11/02/23

### Added
- form_styles.css as of 11/02/23

### Edited
- AuthForm.js as of 11/02/23

### Edited 11/03/23
    modified:   src/Components/Auth/AuthForm.js
    modified:   src/Components/Auth/AuthLogin.js
    modified:   src/Components/Auth/AuthRegister.js
    modified:   src/Components/Auth/AuthService.js
    modified:   src/Components/Header/Header.js
    modified:   src/form_styles.css
    modified:   src/index.css
    -- for Feature 5, added CSS styling to AuthForms, added log out button to NavBar (Header.js), fixed some User logic when registering/logging in...

### Edited 11/03/23
        modified:   src/Components/Connect/Connect.js
        modified:   src/Components/Home/Home.js
        modified:   src/Components/Main/MainList.js
        modified:   src/Components/Main/ReqList.js
        modified:   src/Components/Main/UserList.js
        modified:   src/form_styles.css
        modified:   src/index.css
    -- removed lines between components and also added some padding... 
### Edited 11/03/23
        modified:   src/Components/Home/Home.js
        modified:   src/index.css
    -- added register and login links on home page

### Edited 11/27/2023
    diff --git a/feature4/feature4/src/Components/Auth/AuthService.js b/feature4/feature4/src/Components/Auth/AuthService.js
    index 2bc2a65..0ca680f 100644
    --- a/feature4/feature4/src/Components/Auth/AuthService.js
    +++ b/feature4/feature4/src/Components/Auth/AuthService.js
    @@ -47,7 +47,7 @@ export const loginUser = (currUser) => {
    // if parse.user.current() && parse.user.current().authenticated
    export const checkUser = () => {
    const currentUser = Parse.User.current();
    -  if (currentUser && currentUser.authenticated) {
    +  if (currentUser && currentUser.authenticated()) {
        return true;
    } else {
        return false;
    diff --git a/feature4/feature4/src/Components/Connect/Connect.js b/feature4/feature4/src/Components/Connect/Connect.js
    index a39a6c7..c9811ae 100644
    --- a/feature4/feature4/src/Components/Connect/Connect.js
    :...skipping...
    diff --git a/feature4/feature4/src/Components/Auth/AuthService.js b/feature4/feature4/src/Components/Auth/AuthService.js
    index 2bc2a65..0ca680f 100644
    --- a/feature4/feature4/src/Components/Auth/AuthService.js
    +++ b/feature4/feature4/src/Components/Auth/AuthService.js
    @@ -47,7 +47,7 @@ export const loginUser = (currUser) => {
    // if parse.user.current() && parse.user.current().authenticated
    export const checkUser = () => {
    const currentUser = Parse.User.current();
    -  if (currentUser && currentUser.authenticated) {
    +  if (currentUser && currentUser.authenticated()) {
        return true;
    } else {
        return false;
    diff --git a/feature4/feature4/src/Components/Connect/Connect.js b/feature4/feature4/src/Components/Connect/Connect.js
    index a39a6c7..c9811ae 100644
    --- a/feature4/feature4/src/Components/Connect/Connect.js
    +++ b/feature4/feature4/src/Components/Connect/Connect.js
    @@ -1,33 +1,29 @@
    import React, { useState, useEffect } from "react";
    import ReqList from "../Main/ReqList.js";
    import { getAllRequests, Requests} from "../../Services/RequestService";
    -
    +import CourseForm from "./CourseForm.js";
    const Connect = () => {
    +    const [reqs, setReqs] = useState([]);
    +    const [courses, setCourses] = useState([]);
    +    const [user, setUser] = useState({ canHelp: [], needHelp: [] });
    +
        // const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
        // console.log("data: ", data);
        // Variables in the state to hold data
    -     const [reqs, setReqs] = useState([]);
    -     // UseEffect to run when the page loads to
    -     // obtain async data and render
    -     useEffect(() => {
    -       if (Requests.collection.length) {
    -         setReqs(Requests.collection);
    -       } else {
    -         getAllRequests().then((reqs) => {
    -           console.log(reqs);
    -           setReqs(reqs);
    -         });
    -       }
    -     }, []);
    - conclusion:
        modified:   src/Components/Auth/AuthService.js
        modified:   src/Components/Connect/Connect.js
        modified:   src/Components/Header/Header.js
        modified:   src/Components/Main/MainList.js
        modified:   src/Components/Main/ReqList.js
        modified:   src/Components/Main/UserList.js
        modified:   src/Services/RequestService.js
        modified:   src/form_styles.css
        modified:   src/index.css
        
        enhanced connect page -- can add a class to the database now, setting up so we can create requests that contain a user pointer and arrays of class pointers...