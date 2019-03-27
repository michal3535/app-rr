import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <label>
        Wpisz login
        <input type="text" />
      </label>
      <label>
        Wpisz hasło
        <input type="password" />
      </label>
      <button>Zaloguj</button>
    </>
  );
};

export default LoginPage;
