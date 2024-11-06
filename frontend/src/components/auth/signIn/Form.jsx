import React, { useState } from "react";
import ViewForm from "../../../views/auth/signIn/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Form(props) {
  const { handleRegister } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValid = email && password;
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/auth/signin`,
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      const { token, firstname } = response.data;
      Cookies.set("token", token);
      Cookies.set("firstname", firstname);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ViewForm
      handleRegister={handleRegister}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
      isValid={isValid}
    />
  );
}

export default Form;
