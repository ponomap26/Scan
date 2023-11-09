import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { logiUser } from "./store/actionCreators";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logiUser({ login, password }));
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="login_page-1">
          <label htmlFor="login">Login</label>
          <input
            name="login"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            type="text"
            placeholder="Логин"
          />
        </div>
        <div className="login_page-2">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Пароль"
          />
        </div>
        <div className="login_page-2">
          <button>Войти</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;