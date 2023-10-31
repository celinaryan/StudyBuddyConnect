import React from "react";

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} autoComplete="off">
     <div>
        <div className="form-group">
          <label>Username:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="username-input"
            value={user.username}
            onChange={onChange}
            name="username"
            placeholder="username"
            required
          />
        </div>{" "}
        </div> 
        <div>
        <div className="form-group">
          <label>Password:</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            placeholder="password"
            min="0"
            required
          />
        </div>
    {!isLogin ? 
    <div>
        <div className="form-group">
          <label>First Name:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="first name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="last name"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Email:</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Phone Number:</label>
          <br />
          <input
            type="phoneNumber"
            className="form-control"
            id="phoneNumber-input"
            value={user.phoneNumber}
            onChange={onChange}
            name="phoneNumber"
            placeholder="phoneNumber"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label>University:</label>
          <br />
          <input
            type="university"
            className="form-control"
            id="university-input"
            value={user.university}
            onChange={onChange}
            name="university"
            placeholder="university"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label>Major:</label>
          <br />
          <input
            type="major"
            className="form-control"
            id="major-input"
            value={user.major}
            onChange={onChange}
            name="major"
            placeholder="major"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label>Classes you can help with:</label>
          <br />
          <input
            type="canHelp"
            className="form-control"
            id="canHelp-input"
            value={user.canHelp}
            onChange={onChange}
            name="canHelp"
            placeholder="Classes you can help with"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label>Classes you need help with:</label>
          <br />
          <input
            type="needHelp"
            className="form-control"
            id="needHelp-input"
            value={user.needHelp}
            onChange={onChange}
            name="needHelp"
            placeholder="Classes you need help with"
            min="0"
            required
          />
        </div>

        </div> : <></>}
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
    </div>
  </form>
  );
};

export default AuthForm;