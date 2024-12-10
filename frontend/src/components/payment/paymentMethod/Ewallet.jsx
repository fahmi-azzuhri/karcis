function Ewallet() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Electronic Money</h3>
      <div className="space-y-2">
        <div className="mb-4 border p-2 rounded rounded-sm flex justify-between items-center">
          <label htmlFor="gopay" className="flex items-center space-x-2">
            <input
              type="radio"
              id="gopay"
              name="paymentMethod"
              className="mr-2"
            />
            <span>GoPay</span>
          </label>
          <img src="/img/logo/gopay.png" alt="GoPay" />
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex justify-between items-center">
          <label htmlFor="ovo" className="flex items-center space-x-2">
            <input
              type="radio"
              id="ovo"
              name="paymentMethod"
              className="mr-2"
            />
            <span>OVO</span>
          </label>
          <img src="/img/logo/ovo.png" alt="OVO" />
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex justify-between items-center">
          <label htmlFor="linkaja" className="flex items-center space-x-2">
            <input
              type="radio"
              id="linkaja"
              name="paymentMethod"
              className="mr-2"
            />
            <span>LinkAja</span>
          </label>
          <img src="/img/logo/link-aja.png" alt="LinkAja" />
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex justify-between items-center">
          <label htmlFor="shopeepay" className="flex items-center space-x-2">
            <input
              type="radio"
              id="shopeepay"
              name="paymentMethod"
              className="mr-2"
            />
            <span>ShopeePay</span>
          </label>
          <img src="/img/logo/shopee-pay.png" alt="ShopeePay" />
        </div>
      </div>
    </div>
  );
}

export default Ewallet;
