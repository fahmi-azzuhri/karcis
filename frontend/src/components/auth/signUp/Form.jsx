import React from "react";

function Form(props) {
  const { handleLogin } = props;
  return (
    <form className="space-y-4">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700">Email address</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your password"
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
        disabled
      >
        Sign up
      </button>
    </form>
  );
}

export default Form;
