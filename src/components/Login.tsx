import React, { useState } from "react";

import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Login.css";

interface LoginProps {
  setLoggedIn: (value: boolean) => void;
}

interface DecodedToken {
  isAdmin: boolean;
}

const Login: React.FC<LoginProps> = ({ setLoggedIn }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<DecodedToken | null>(null);

  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://loveyes.vercel.app/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setLoggedIn(true);

      const decodedToken: DecodedToken = jwtDecode(data.token);
      setToken(decodedToken);

      if (decodedToken.isAdmin) {
        navigate("/register");
      } else {
        navigate("/intro");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="deeppink" style={{ marginBottom: "-30px" }} class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                <input
                  type="text"
                  className="login__input"
                  placeholder="User name"
                  id="email"
                  value={username}
                  onChange={handleUsernameChange}
                  autoFocus
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="deeppink" style={{ marginBottom: "-30px" }} class="bi bi-key-fill" viewBox="0 0 16 16">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
                <input
                  type="password"
                  className="login__input"
                 
                  value={password}
              onChange={handlePasswordChange}
              
              id="password"
              placeholder="Enter password"
              required
                />
              </div>
              <button className="button login__submit">
                <span className="button__text center ">Log In Now</span>
                {/* <i className="button__icon fas fa-chevron-right"></i>
                <i className="bi bi-person-circle"></i> */}
               
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted my-bold-text" htmlFor="email">
            Username
          </label>
          <div className="form-icon-wrapper my-1">
            <input
              type="text"
              className="form-control formff"
              id="email"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter username"
              autoFocus
              required
            />
            <i className="form-icon-left mdi mdi-email" />
          </div>
        </div>
        <div className="form-group">
          <label className="text-muted my-bold-text" htmlFor="password">
            Password
          </label>
          <div className="form-icon-wrapper my-1">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control formff"
              id="password"
              placeholder="Enter password"
              required
            />
            <i className="form-icon-left mdi mdi-lock pos" />
            <i className="mdi mdi-eye" />
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block">Sign In</button>
        </div>
      </form> */}
    </>
  );
};

export default Login;
