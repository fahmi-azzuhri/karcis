import React from "react";

function Ewallet() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Electronic Money</h3>
      <div className="space-y-2">
        <div className="mb-4 border p-2 rounded rounded-sm flex flex-row items-center">
          <input
            type="radio"
            id="gopay"
            name="paymentMethod"
            className="mr-2"
          />
          <label htmlFor="gopay" className="flex items-center space-x-2">
            <img src="/gopay-logo.png" alt="GoPay" className="w-6" />
            <span>GoPay</span>
          </label>
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex flex-row items-center">
          <input type="radio" id="ovo" name="paymentMethod" className="mr-2" />
          <label htmlFor="ovo" className="flex items-center space-x-2">
            <img src="/ovo-logo.png" alt="OVO" className="w-6" />
            <span>OVO</span>
          </label>
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex flex-row items-center">
          <input
            type="radio"
            id="linkaja"
            name="paymentMethod"
            className="mr-2"
          />
          <label htmlFor="linkaja" className="flex items-center space-x-2">
            <img src="/linkaja-logo.png" alt="LinkAja" className="w-6" />
            <span>LinkAja</span>
          </label>
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex flex-row items-center">
          <input
            type="radio"
            id="shopeepay"
            name="paymentMethod"
            className="mr-2"
          />
          <label htmlFor="shopeepay" className="flex items-center space-x-2">
            <img src="/shopeepay-logo.png" alt="ShopeePay" className="w-6" />
            <span>ShopeePay</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Ewallet;
