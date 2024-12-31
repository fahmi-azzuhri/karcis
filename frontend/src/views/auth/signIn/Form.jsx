import React from "react";
import InputLabel from "../inputLabel";
import Toastt from "../../../components/toast";

function ViewForm(props) {
  const {
    handleRegister,
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    isValid,
  } = props;
  return (
    <div>
      <Toastt />
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <InputLabel
            label="Email"
            type="text"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <InputLabel
            label="Password"
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="text-sm text-gray-500 text-right">
          Don't have an account yet?
          <span
            onClick={handleRegister}
            className=" px-1 text-blueDefault cursor-pointer"
          >
            Sign up
          </span>
          now!
        </p>

        <div className="p-4 bg-[#F0EFFE]">
          <p className="text-sm text-blueDefault">
            E-tickets will be sent to your email address, please make sure your
            email address is correct.
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-blue-200"
          disabled={!isValid}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default ViewForm;
