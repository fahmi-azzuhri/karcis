import React from "react";

function InputLabel({ label, type, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputLabel;
