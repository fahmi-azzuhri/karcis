import React, { useState } from "react";
import Aside from "../../../payment/paymentMethod/Aside";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto py-8 px-4 flex space-x-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Buyer Contact Information
          </h2>
          <p className="text-sm text-blue-500 bg-blue-100 p-3 rounded mb-4">
            E-tickets will be sent to your email address, please make sure your
            email address is correct.
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              placeholder="Rachel"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              placeholder="Green"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              placeholder="rachelgreen@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              placeholder="081234567"
            />
          </div>
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Checkout;
