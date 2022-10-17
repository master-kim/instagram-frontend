import React from "react";
import insta_logo from "../../images/insta_logo.png";
import "./SignupPage.css";

function SignupPage() {
  return(
  <>
    <div className="signup--form-container">

        <form className="form-container">
          <img className="signup-website-logo-desktop-img" src={insta_logo} />
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              //   value={username}
              className="username-input-field"
              //   onChange={this.onChangeUsername}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              //   value={password}
              className="password-input-field"
              //   onChange={this.onChangePassword}
              placeholder="Password"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password-check">
              PASSWORD CHECK
            </label>
            <input
              type="password"
              id="password-check"
              //   value={password}
              className="password-input-field"
              //   onChange={this.onChangePassword}
              placeholder="Password Check"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              //   value={password}
              className="email-input-field"
              //   onChange={this.onChangePassword}
              placeholder="Email"
            />
          </div>
          <button className="register-button" type="submit">
            Register
          </button>
        </form>
      </div>
  </>
  )
}

export default SignupPage;
