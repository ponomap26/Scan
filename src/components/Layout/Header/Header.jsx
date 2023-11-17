import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "react-bootstrap";
import logo1 from "../../public/images/sgn-09-24-2022-1663968217400-1.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Auth/store/authReducer";
import { login } from "../../Auth";
import axios from "axios"; // Import axios to make HTTP requests

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

  // Create a state variable to store the response data
  const [data, setData] = useState(null);

  // Create a function to call the API
  const fetchData = async () => {
    try {
      // Get the access token from localStorage
      const token = localStorage.getItem("token");
      // Make a GET request with the URL and the authorization header
      const response = await axios.get("https://gateway.scan-interfax.ru/api/v1/account/info", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Set the data state with the response data
      setData(response.data);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  // Use useEffect hook to call the function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="screen">
      <img className="SGN" src={logo1} alt="logo" />
      <nav className="group">
        <Link className="text-wrapper" to="/">
          Главная
        </Link>
        <Link className="div">Тарифы</Link>
        <Link className="text-wrapper-2">FAQ</Link>
      </nav>
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
              <Button  variant="primary" size="sm">Войти</Button>
            </Link>
          )}
        </div>
      </div>
      {/* Use JSX to render the data in the UI */}

        {isAuthenticated && data && (
        <div className="data-1">
          <p>Использованно компаний: {data.eventFiltersInfo.usedCompanyCount}</p>
          <p>Лимит по компаниям : {data.eventFiltersInfo.companyLimit}</p>
        </div>
      )}


    </div>
  );
};

export default Header;