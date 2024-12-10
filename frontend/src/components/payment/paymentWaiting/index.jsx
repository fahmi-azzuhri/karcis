import React from "react";
import Aside from "../paymentMethod/Aside";
import Method from "./Method";

function PaymentWaiting() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Waiting for Payment</h2>
          <div className="bg-red-100">
            <p className="text-red-600 mt-2 p-3">
              Please complete this payment before 15:00 WIB
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Method />

          <div>
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentWaiting;
