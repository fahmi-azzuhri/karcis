import React from "react";

function AddConcertModal(props) {
  const { handleCloseModal, handleConcertAdded } = props;
  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <form
        // onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-4">Add New Concert</h2>
          <input
            name="title"
            placeholder="Event Title"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="location"
            placeholder="Location"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="date"
            type="date"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <div className="flex space-x-3 mb-3">
            <input
              name="startTime"
              type="time"
              className="w-full p-2 border rounded-md"
            />
            <span className="self-center">to</span>
            <input
              name="endTime"
              type="time"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <input
            name="audience"
            placeholder="Audience"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="attention"
            placeholder="Attention"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-2 mb-3 border rounded-md"
          />
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
          <input type="file" className="w-full p-2 mb-3" />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
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

export default AddConcertModal;
