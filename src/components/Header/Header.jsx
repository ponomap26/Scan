import React from "react";
import "./Header.css";
import {Button, NavLink} from "react-bootstrap";
import logo1 from "/src/public/images/SGN_09_24_2022_1663968217400 1.png"

const Header = () => {
  return (
    <div className="screen">
          <img className="SGN"  src={logo1} alt="logo" />
          <div className="group">
            <NavLink className="text-wrapper">Главная</NavLink>
            <NavLink className="div">Тарифы</NavLink>
            <NavLink className="text-wrapper-2">FAQ</NavLink>
          </div>
          <div className="group-2">
            <NavLink className="text-wrapper-3">Зарегистрироваться</NavLink>
            <div className="overlap-group-wrapper">
                <Button className="overlap-group">Войти</Button>
            </div>
            {/*<div className="rectangle" />*/}
          </div>
    </div>
  );
};
export default Header