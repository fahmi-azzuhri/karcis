import React from "react";

function ViewEventModal(props) {
  const {
    handleSubmit,
    formData,
    handleInputChange,
    handleFileChange,
    handleCloseModal,
  } = props;

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">Add New Event</h2>
          <input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Event Title"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border rounded-md"
          />
          <div className="flex space-x-3 mb-3">
            <input
              name="startTime"
              type="time"
              value={formData.startTime}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
            <span className="self-center">to</span>
            <input
              name="endTime"
              type="time"
              value={formData.endTime}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <input
            name="audience"
            value={formData.audience}
            onChange={handleInputChange}
            placeholder="Audience"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="attention"
            value={formData.attention}
            onChange={handleInputChange}
            placeholder="Attention"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="vipPrice"
            value={formData.vipPrice}
            onChange={handleInputChange}
            placeholder="VIP Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="vvipPrice"
            value={formData.vvipPrice}
            onChange={handleInputChange}
            placeholder="VVIP Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="ngedatePrice"
            value={formData.ngedatePrice}
            onChange={handleInputChange}
            placeholder="Ngedate Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="ngedatePremiumPrice"
            value={formData.ngedatePremiumPrice}
            onChange={handleInputChange}
            placeholder="Ngedate Premium Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="ramePrice"
            placeholder="Rame Price"
            value={formData.ramePrice}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            name="ramePremiumPrice"
            value={formData.ramePremiumPrice}
            onChange={handleInputChange}
            placeholder="Rame Premium Price"
            className="w-full p-2 mb-3 border rounded-md"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 mb-3"
          />
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

export default ViewEventModal;
