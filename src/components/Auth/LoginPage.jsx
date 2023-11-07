import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Отправка запроса на сервер для авторизации
    axios
      .post('https://gateway.scan-interfax.ru/api/v1/account/login', {
        login,
        password,
      })
      .then((response) => {
        // Обработка успешного ответа от сервера
        const { token } = response.data;
        setToken(token);

        // Очистка полей формы
        setLogin('');
        setPassword('');

        // Дополнительные действия после успешной авторизации
        // Например, сохранение токена в локальном хранилище
        // или перенаправление на другую страницу
        try {
          localStorage.setItem('accessToken', token);
          console.log(token)
        } catch (error) {
          console.error('Ошибка при сохранении токена:', error);
        }
      })
      .catch((error) => {
        // Обработка ошибки
        console.error('Ошибка при авторизации:', error);
      });
  };

  return (
    <>
      <div className="111">
        <h2>Форма авторизации</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="login">Логин:</label>
          <input type="text" id="login" value={login} onChange={handleLoginChange} />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Войти</button>
      </form>
      </div>

    </>
  );
};

export default LoginPage