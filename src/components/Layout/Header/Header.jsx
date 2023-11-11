import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "react-bootstrap";
import logo1 from "../../public/images/sgn-09-24-2022-1663968217400-1.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Auth/store/authReducer";
import { login } from "../../Auth";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("login");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("login", name);
  }, [name]);
  console.log(name)

  // Check if the user is authenticated using the access token in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());

    // Remove the authentication token from the local storage
    localStorage.removeItem("token");

    // Redirect to the desired page (e.g., login page)
    navigate("/login");
  };

  return (
    <div className="screen">
      <img className="SGN" src={logo1} alt="logo" />
      <div className="group">
        <Link className="text-wrapper" to="/">
          Главная
        </Link>
        <Link className="div">Тарифы</Link>
        <Link className="text-wrapper-2">FAQ</Link>
      </div>
      <div className="group-2">
        <Link className="text-wrapper-3">Зарегистрироваться</Link>
        <div className="overlap-group-wrapper">
          {isAuthenticated ? (
            <span className="overlap-group">
              {auth.login?.login}
              <Button onClick={handleLogout}>Выйти</Button>
            </span>
          ) : (
            <Link className="overlap-group" to="/login">
              <Button>Войти</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;