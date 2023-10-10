import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправка данных на сервер для проверки подлинности пользователя
  };

  return (
      <>
          <Header />

            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <button type="submit">Log in</button>
            </form>
          <Footer/>

      </>



  );
}

export default Auth;