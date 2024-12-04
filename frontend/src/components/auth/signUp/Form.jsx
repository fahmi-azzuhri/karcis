import axios from "axios";
import React, { useState } from "react";
import ViewForm from "../../../views/auth/signUp/Form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

function Form(props) {
  const { handleLogin } = props;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValid = firstname && lastname && email && password;
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: async ({ firstname, lastname, email, password }) => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/auth/signup`,
        {
          firstname,
          lastname,
          email,
          password,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      navigate("/signin");
    },
    onError: (error) => {
      console.error("register failed", error);
    },
  });
  const handleSignup = async (e) => {
    e.preventDefault();
    if (isValid) {
      registerMutation.mutate({ firstname, lastname, email, password });
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
