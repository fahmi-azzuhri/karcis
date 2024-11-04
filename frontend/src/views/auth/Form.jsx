import React from "react";
import InputLabel from "./InputLabel";

function ViewForm(props) {
  const {
    firstname,
    lastname,
    email,
    password,
    isValid,
    handleSignup,
    handleLogin,
    setFirstname,
    setLastname,
    setEmail,
    setPassword,
  } = props;
  return (
    <form className="space-y-4" onSubmit={handleSignup}>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <InputLabel
            label="First Name"
            type="text"
            placeholder="Your firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <InputLabel
            label="Last Name"
            type="text"
            placeholder="Your lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
      </div>
      <div>
        <InputLabel
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <InputLabel
          label="Password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <p className="text-sm text-gray-500 text-right">
        Already have an account?
        <span
          onClick={handleLogin}
          className=" px-1 text-blueDefault cursor-pointer"
        >
          Sign in
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
        Sign up
      </button>
    </form>
  );
}

export default ViewForm;
