import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import {Button} from "react-bootstrap";
import logo1 from "/src/public/images/SGN_09_24_2022_1663968217400 1.png"

const Header = () => {
  return (
    <div className="screen">
          <img className="SGN"  src={logo1} alt="logo" />
          <div className="group">
            <Link className="text-wrapper" to="/">Главная</Link>
            <Link className="div">Тарифы</Link>
            <Link className="text-wrapper-2">FAQ</Link>
          </div>
          <div className="group-2">
            <Link className="text-wrapper-3">Зарегистрироваться</Link>
            <div className="overlap-group-wrapper">
                <Link className="overlap-group" to="/auth">
                  <Button>Войти</Button>
                </Link>
            </div>

          </div>
    </div>
  );
};
export default Header;