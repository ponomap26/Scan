import React from "react";
import { useNavigate } from "react-router-dom";
import "./Label.css";
import logo from "./main.png";
import Button from 'react-bootstrap/Button'

function Label() {
    const navigate = useNavigate();
     const isAuthenticated = !!localStorage.getItem("token");

     const handleSecretPageClick = () => {
    if (isAuthenticated) {
      navigate("/data");
    } else {
      navigate("/login");
    }
  };

    return (
        <main className="label">
            <div className="wrapper">
                <div className="left-side">
                    <div className="title">сервис по поиску публикаций <br/> о компании <br/> по его ИНН</div>
                        <p className="desc">Комплексный анализ публикаций, получение данных в формате PDF на электронную
                            почту.</p>
                        <Button onClick={handleSecretPageClick} className="button-1">Запросить данные</Button>
                </div>
                <div className="image-2">
                    <img src={logo} alt="Inn" width="393px" height="429px"/>
                </div>

            </div>
        </main>
    )
}

export default Label;