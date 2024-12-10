import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

function SignUp() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/signin");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-blueDefault">
            Sign up for the Best Concert Experience
          </h1>
        </div>
        <Form handleLogin={handleLogin} />
      </div>
    </div>
  );
}

export default SignUp;
