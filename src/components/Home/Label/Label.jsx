import React from "react";

import "./Label.css";
import {Link} from "react-router-dom";
import logo from "./main.png";
import Button from 'react-bootstrap/Button'

function Label() {
    return (
        <main className="label">
            <div className="wrapper">
                <div className="left-side">
                    <div className="title">сервис по поиску публикаций <br/> о компании <br/> по его ИНН</div>
                        <p className="desc">Комплексный анализ публикаций, получение данных в формате PDF на электронную
                            почту.</p>
                    <Link to="/data">
                        <Button className="button-1">Запросить данные</Button>
                    </Link>
                </div>
                <div className="image-2">
                    <img src={logo} alt="Inn" width="393px" height="429px"/>
                </div>

            </div>
        </main>
    )
}

export default Label