import React from "react";
import "./Label.css";
import logo from  "../public/images/2398-1.png";

export const Label = () => {
  return (
    <div className="label">
      <p className="text-wrapper">
        сервис по поиску публикаций <br />о компании <br />
        по его ИНН
      </p>
        <div className="label-1">
             <p className="PDF">
            <span className="text-wrapper-1">Комплексный анализ публикаций</span>
            <span className="span">, получение данных в формате PDF на электронную почту</span>
            <span className="text-wrapper-1">.</span>
          </p>
        </div>
       <div className="image-2">
            <img src={logo} alt="Inn" width="593px" height="629px" />
       </div>

    </div>


  );
};