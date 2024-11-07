import React from "react";

function EventDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-4">
        <div className="flex justify-end items-center mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base">
              + Add Product
            </button>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-md overflow-x-auto">
          <table className="min-w-full text-sm sm:text-base">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-2 sm:p-3 text-left">Product Name</th>
                <th className="p-2 sm:p-3 text-left">Starting Stock</th>
                <th className="p-2 sm:p-3 text-left">Current Stock</th>
                <th className="p-2 sm:p-3 text-left">Availability</th>
                <th className="p-2 sm:p-3 text-left">Price</th>
                <th className="p-2 sm:p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-2 sm:p-3">Konimex Renovit 30'</td>
                <td className="p-2 sm:p-3">1134</td>
                <td className="p-2 sm:p-3">232</td>
                <td className="p-2 sm:p-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Available
                  </span>
                </td>
                <td className="p-2 sm:p-3">Rp 69.602</td>
                <td className="p-2 sm:p-3">
                  <button className="text-blue-500 mr-2">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
              {/* Additional Rows */}
              <tr className="border-b hover:bg-gray-100">
                <td className="p-2 sm:p-3">Ikadryl Sirup 100ml</td>
                <td className="p-2 sm:p-3">3345</td>
                <td className="p-2 sm:p-3">3345</td>
                <td className="p-2 sm:p-3">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">
                    Out of Stock
                  </span>
                </td>
                <td className="p-2 sm:p-3">Rp 69.602</td>
                <td className="p-2 sm:p-3">
                  <button className="text-blue-500 mr-2">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
              {/* Repeat for more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default EventDashboard;
