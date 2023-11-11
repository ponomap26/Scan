import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Label.css";
import logo from "../public/images/2398-1.png";
import Button from 'react-bootstrap/Button';

export const Label = () => {
  const navigate = useNavigate();

  // Check if the user is authenticated using the access token in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  const handleSecretPageClick = () => {
    if (isAuthenticated) {
      navigate("/secret-page");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="label">
      <p className="text-wrapper">
        сервис по поиску публикаций <br />о компании <br />
        по его ИНН
      </p>
      <div className="label-1">
        <p className="PDF">
          <span className="text-wrapper-1">
            Комплексный анализ публикаций
          </span>
          <span className="span">
            , получение данных в формате PDF на электронную почту
          </span>
          <span className="text-wrapper-1">.</span>
        </p>
      </div>
      <div className="image-2">
        <img src={logo} alt="Inn" width="393px" height="429px" />
      </div>
      <Button  href="#" onClick={handleSecretPageClick} >
        Запросить данные
      </Button>
    </div>
  );
};
