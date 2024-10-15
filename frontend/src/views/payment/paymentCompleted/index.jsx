import React from "react";

function ViewPaymentCompleted(props) {
  const { payment_success, BsTelephone, CiMail } = props;
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="text-center p-6">
        <div className="bg-white border w-1/2 sm:w-56 border-gray-300 rounded-lg shadow-[8px_8px_6px_1px_rgba(0,_0,_0,_0.1)] shadow-[#0022BA] mx-auto">
          <h1 className="text-3xl font-bold text-blueDefault">Completed!</h1>
        </div>
        <img
          src={payment_success}
          alt="Payment Success"
          className="mx-auto mb-6"
        />
        <div className="flex flex-col gap-2 mb-4">
          <h4 className="text-xl">Ticket has been sent to</h4>
          <p className="font-medium text-blueDefault">lorem@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <p>Haven't received tickets yet?</p>
          <button className="text-blueDefault py-2 px-4 border border-blueDefault w-1/3 rounded mx-auto hover:bg-blueDefault hover:text-white">
            Resend Tickets
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <p>Having trouble receiving the tickets?</p>
          <div className="flex flex-col sm:flex-row justify-evenly">
            <div className="flex items-center gap-1">
              <BsTelephone className="text-blueDefault" />
              <p className="text-blueDefault">+62 21 1234 9876</p>
            </div>
            <div className="flex items-center gap-1">
              <CiMail className="text-blueDefault" />
              <p className="text-blueDefault">karcis@karcis.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPaymentCompleted;
