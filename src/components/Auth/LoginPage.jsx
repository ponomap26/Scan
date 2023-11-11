import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login || !password) {
      setError("Please enter a login and password");
      return;
    }

    try {
      const response = await axios.post(
        "https://gateway.scan-interfax.ru/api/v1/account/login",
        { login, password }
      );

      const token = response.data.accessToken;

      console.log("token: " + token);

      localStorage.setItem("token", token);
      navigate("/"); // Redirect to the home page

      // Dispatch an action to update the redux state
      // dispatch(loginUser({ login, password }));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid login or password");
      } else {
        setError("An error occurred during authorization");
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Login
          <input
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            type="text"
            placeholder="Login"
          />
        </label>
        <br />
        <label>
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </label>
        <br />
        <Button type="submit" variant="primary">Войти</Button>
      </form>
    </div>
  );
};

export default LoginPage;