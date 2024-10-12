import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

function SignIn() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/signup");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-blueDefault">
            Sign in to Buy Your Concert Tickets
          </h1>
        </div>
        <Form handleRegister={handleRegister} />
      </div>
    </div>
  );
}

export default SignIn;
