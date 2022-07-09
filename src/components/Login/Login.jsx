
import React, { useEffect, useState } from "react";

import Form from "./Form";
import "./style/login.css"
import UserLogged from "./UserLogged";

const LoginScreen = () => {

  const [token, setToken] = useState('')

  const changedToken = localStorage.getItem('token')

  useEffect(() => {

    setToken(changedToken)
  }, [changedToken])

  return (
    <div className="login">
      {  token ? <UserLogged />: <Form /> }
    </div>
  );
};

export default LoginScreen;