import React, {useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import image from "./authblock.png";
import googleLogo from "./google.png"
import facebookLogo from "./facebook.png"
import yandexLogo from "./yandex.png"
import "./Auth.css";

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
                {login, password}
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

        <div className="authpage">

            <div className="wrapper">
                <div className="left-side">
                    <div className="">Для оформления подписки на тариф, необходимо авторизоваться.</div>
                    <img src={image} alt="Изображение для страницы авторизации" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="decor">
                        <div className="tabs">
                            <a href="#" className="tab tab-active">Войти</a>
                            <a href="#" className="tab">Зарегистрироваться</a>
                        </div>

                        <label htmlFor="login">
                            логин или номер телефона
                            <input
                                onChange={(e) => setLogin(e.target.value)}
                                value={login}
                                type="text"
                                placeholder="Login"
                            />
                        </label>
                        <br/>
                        <label htmlFor="password">
                            пароль
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password"
                            />
                        </label>
                        <br/>
                        <button className="button-auch" type="submit" >Войти</button>
                        <a href="#" className="recovery">Восстановить пароль</a>
                        <div className="loginwith">
                            <p>Войти через:</p>
                            <div className="services">
                                <a href="#"><img src={googleLogo} alt=""/></a>
                                <a href="#"><img src={facebookLogo} alt=""/></a>
                                <a href="#"><img src={yandexLogo} alt=""/></a>
                            </div>
                        </div>

                    </div>
                </form>
            </div>

        </div>

    )
        ;
};

export default LoginPage;