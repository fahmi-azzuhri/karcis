import axios from "axios";
import React, { useState } from "react";
import ViewForm from "../../../views/auth/signUp/Form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

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
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    },
    onError: (error) => {
      console.error("register failed", error);
    },
  });
  const handleSignup = async (e) => {
    e.preventDefault();
    if (isValid) {
      toast.promise(
        registerMutation.mutateAsync({ firstname, lastname, email, password }),
        {
          loading: "Please wait ...",
          success: "Account created successfully",
          error: "Register failed, please fill form completed",
        }
      );
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
