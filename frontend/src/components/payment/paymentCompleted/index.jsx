import React from "react";
import ViewPaymentCompleted from "../../../views/payment/paymentCompleted";
import payment_success from "/img/bg/payment-success.png";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
function PaymentCompleted() {
  return (
    <ViewPaymentCompleted
      BsTelephone={BsTelephone}
      CiMail={CiMail}
      payment_success={payment_success}
    />
  );
}

export default PaymentCompleted;
