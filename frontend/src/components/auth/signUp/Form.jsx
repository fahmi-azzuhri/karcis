import axios from "axios";
import React, { useState } from "react";
import ViewForm from "../../../views/auth/signUp/Form";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const { handleLogin } = props;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValid = firstname && lastname && email && password;
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/auth/signup`,
        {
          firstname,
          lastname,
          email,
          password,
        }
      );
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ViewForm
      firstname={firstname}
      lastname={lastname}
      email={email}
      password={password}
      setFirstname={setFirstname}
      setLastname={setLastname}
      setEmail={setEmail}
      setPassword={setPassword}
      handleSignup={handleSignup}
      isValid={isValid}
      handleLogin={handleLogin}
    />
  );
}

export default Form;
