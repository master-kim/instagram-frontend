import React, { useState, useEffect } from "react";
import insta_image from "../../images/insta_image.svg";
import insta_logo from "../../images/insta_logo.png";
import "./LoginPage.css";

function LoginPage() {
  return (
    <>
      <div className="login--form-container">
        <img className="login-img" src={insta_image} alt="website login" />

        <form className="form-container">
          <img className="login-website-logo-desktop-img" src={insta_logo} />
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

          <button className="login-button" type="submit">
            Sign In
          </button>
          <button className="login-button" type="submit">
            Register
          </button>
          <button className="login-button" type="submit">
            Find ID or Password
          </button>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
