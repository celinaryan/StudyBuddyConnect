import React from "react";
import "../../form_styles.css";

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      {isLogin ? (
        <div className="auth-form">
          <div className="form-group">
            <label className="form-label">Username:</label>
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
          </div>
          <div className="form-group">
            <label className="form-label">Password:</label>
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
        </div>
      ) : (
        <>
          <div className="auth-form">
          <div className="form-group">
            <label className="form-label">Username:</label>
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
          </div>
          <div className="form-group">
            <label className="form-label">Password:</label>
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
            <div className="form-group">
              <label className="form-label">First Name:</label>
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
              <label className="form-label">Last Name:</label>
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
            </div>
            <div className="form-group">
              <label className="form-label">Email:</label>
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
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number:</label>
              <br />
              <input
                type="tel"
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
              <label className="form-label">University:</label>
              <br />
              <input
                type="text"
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
              <label className="form-label">Major:</label>
              <br />
              <input
                type="text"
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
              <label className="form-label">Class Year:</label>
              <br />
              <input
                type="text"
                className="form-control"
                id="classyear-input"
                value={user.classYear}
                onChange={onChange}
                name="classYear"
                placeholder="class year"
                min="0"
                required
              />
            </div>
           
          </div>
        </>
      )}
      <div className="auth-form">
        <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default AuthForm;