import React from "react";
import Va from "./Va";
import Cc from "./Cc";
import Ewallet from "./Ewallet";
import Aside from "./Aside";

function PaymentMethod() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="w-full max-w-5xl mx-auto py-8 px-4 flex space-x-8">
        <section className="w-2/3 p-6">
          <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
          <Cc />
          <Va />
          <Ewallet />
        </section>

        <Aside />
      </main>
    </div>
  );
}

export default PaymentMethod;
