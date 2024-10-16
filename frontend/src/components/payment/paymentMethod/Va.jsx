import React from "react";

function Va() {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Virtual Account</h3>
      <div className="space-y-2">
        <div className="mb-4 border p-2 rounded rounded-sm flex flex-row items-center">
          <input type="radio" id="bca" name="paymentMethod" className="mr-2" />
          <label htmlFor="bca" className="flex items-center flex-row space-x-2">
            <span>BCA Virtual Account</span>
            <img src="/bca-logo.png" alt="BCA" className="w-6" />
          </label>
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex flex-row items-center">
          <input type="radio" id="bni" name="paymentMethod" className="mr-2" />
          <label htmlFor="bni" className="flex items-center space-x-2">
            <img src="/bni-logo.png" alt="BNI" className="w-6" />
            <span>BNI Virtual Account</span>
          </label>
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex flex-row items-center">
          <input
            type="radio"
            id="mandiri"
            name="paymentMethod"
            className="mr-2"
          />
          <label htmlFor="mandiri" className="flex items-center space-x-2">
            <img src="/mandiri-logo.png" alt="Mandiri" className="w-6" />
            <span>Mandiri Virtual Account</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Va;
