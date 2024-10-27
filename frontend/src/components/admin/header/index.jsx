import React from "react";

function HeaderDashboard(props) {
  const { title, page } = props;
  return (
    <header className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
        <p className="text-sm text-gray-500">{page}</p>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="p-2 border rounded-md w-1/4"
      />
    </header>
  );
}

export default HeaderDashboard;
