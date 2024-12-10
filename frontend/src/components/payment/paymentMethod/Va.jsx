function Va() {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Virtual Account</h3>
      <div className="space-y-2">
        <div className="mb-4 border p-2 rounded rounded-sm flex justify-between items-center">
          <label htmlFor="bca" className="flex items-center space-x-2">
            <input
              type="radio"
              id="bca"
              name="paymentMethod"
              className="mr-2"
            />
            <span>BCA Virtual Account</span>
          </label>
          <img src="/img/logo/bca.png" alt="BCA" />
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex justify-between items-center">
          <label htmlFor="bni" className="flex items-center space-x-2">
            <input
              type="radio"
              id="bni"
              name="paymentMethod"
              className="mr-2"
            />
            <span>BNI Virtual Account</span>
          </label>
          <img src="/img/logo/bni.png" alt="BNI" />
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex justify-between items-center">
          <label htmlFor="mandiri" className="flex items-center space-x-2">
            <input
              type="radio"
              id="mandiri"
              name="paymentMethod"
              className="mr-2"
            />
            <span>Mandiri Virtual Account</span>
          </label>
          <img src="/img/logo/mandiri.png" alt="Mandiri" />
        </div>
        <div className="mb-4 border p-2 rounded rounded-sm flex justify-between items-center">
          <label htmlFor="other" className="flex items-center space-x-2">
            <input
              type="radio"
              id="other"
              name="paymentMethod"
              className="mr-2"
            />
            <span>Other Bank</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Va;
