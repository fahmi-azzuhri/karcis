import React from "react";

function Cc() {
  return (
    <div className="mb-4 border p-2 rounded rounded-sm">
      <input
        type="radio"
        id="creditCard"
        name="paymentMethod"
        className="mr-2"
      />
      <label htmlFor="creditCard" className="text-lg">
        Credit/Debit Card
      </label>
    </div>
  );
}

export default Cc;
