import React from "react";

function PriceModal(props) {
  const { handleCloseModal, handlePriceAdded } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePriceAdded();
    handleCloseModal();
  };
  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">Add New Price</h2>
          <input
            name="vipPrice"
            placeholder="VIP Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="vvipPrice"
            placeholder="VVIP Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="ngedatePrice"
            placeholder="Ngedate Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="ngedatePremiumPrice"
            placeholder="Ngedate Premium Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="ramePrice"
            placeholder="Rame Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="ramePremiumPrice"
            placeholder="Rame Premium Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Add Event
          </button>
          <button
            onClick={handleCloseModal}
            className="w-full bg-red-500 text-white p-2 rounded-md mt-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default PriceModal;
