import axios from 'axios';
import jwt from 'jsonwebtoken';

// Функция для авторизации по токену JWS
export const authorizeWithToken = async (token) => {
  try {
    // Проверка и декодирование токена
    const decodedToken = jwt.verify(token, 'secretKey'); // Замените 'secretKey' на ваш секретный ключ

    // Выполнение запроса авторизации на сервер
    const response = await axios.post('https://gateway.scan-interfax.ru/api/v1/account/login', {
      token: decodedToken,
    });

    // Обработка успешного ответа от сервера
    if (response.status === 200) {
      const { accessToken, refreshToken } = response.data;

      // Сохранение токенов в localStorage или в другом месте по вашему выбору
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Возвращаем успешный результат
      return true;
    }
  } catch (error) {
    // Обработка ошибок при авторизации
    console.error('Ошибка при авторизации:', error);
  }

  // Возвращаем неуспешный результат
  return false;
};

// Функция для получения сохраненного access token
export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

// Функция для получения сохраненного refresh token
export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};