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

      const { token, firstname, role } = response.data;
      Cookies.set("token", token);
      Cookies.set("firstname", firstname);
      Cookies.set("role", role);
      if (role === "user") {
        navigate("/");
      } else {
        navigate("/admin/dashboard/home");
      }
      window.location.reload();
      console.log(response.data);
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
