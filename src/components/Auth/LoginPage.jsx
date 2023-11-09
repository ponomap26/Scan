import React, { useState, useContext, FormEvent } from "react";
import axios from "axios";

// import { Context } from "./store/store.jsx";

// Компонент для формы ввода логина и пароля
const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();
};

    // Проверяем, что логин и пароль не пустые
  //   if (!login || !password) {
  //     setError("Пожалуйста, введите логин и пароль");
  //     return;
  //   }
  //
  //   const json = {
  //     login,
  //     password,
  //   };
  //
  //   try {
  //     const response = await axios.post(
  //       "https://gateway.scan-interfax.ru/api/v1/account/login",
  //       json
  //     );
  //
  //     const token = response.data.token;
  //
  //
  //     localStorage.setItem("token", token);
  //
  //     window.location.href = "/";
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       setError("Неверный логин или пароль");
  //     } else {
  //       setError("Произошла ошибка при авторизации");
  //     }
  //   }
  // };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="login_page-1">
          <label htmlFor="login">Login
          <input
          name="login"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          type="text"
          placeholder="Логин"
        />
        </label>
        </div>
        <div className="login_page-2">
          <label htmlFor="password">Password
             <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
        />
          </label>
        </div>
        <div className="login_page-2">
          <button type="submit">Войти</button>
        </div>

      </form>
    </div>
  );
};

export default LoginPage;