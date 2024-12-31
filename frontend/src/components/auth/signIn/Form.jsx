import React, { useState } from "react";
import ViewForm from "../../../views/auth/signIn/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function Form(props) {
  const { handleRegister } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValid = email && password;
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/auth/signin`,
        {
          email,
          password,
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      const { token, firstname, role } = data;
      Cookies.set("token", token);
      Cookies.set("firstname", firstname);
      Cookies.set("role", role);

      setTimeout(() => {
        navigate(role === "user" ? "/" : "/admin/dashboard/home");
      }, 2000);
    },
    onError: (error) => {
      console.log("Login failed", error);
    },
  });
  const handleLogin = (e) => {
    e.preventDefault();
    if (isValid) {
      toast.promise(loginMutation.mutateAsync({ email, password }), {
        loading: "Please wait ...",
        success: "Login success",
        error: "Login failed, password or email is incorrect",
      });
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
