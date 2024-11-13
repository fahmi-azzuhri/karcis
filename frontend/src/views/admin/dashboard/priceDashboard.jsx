import React from "react";
import PriceModal from "../../../components/admin/priceModal";

function ViewPriceDashboard(props) {
  const {
    events,
    handleOpenModal,
    handleCloseModal,
    isOpen,
    handlePriceAdded,
  } = props;
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-4 overflow-hidden">
        <div className="bg-white rounded-md shadow-md overflow-x-auto max-w-full">
          <button
            onClick={handleOpenModal}
            className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base"
          >
            + Add Price
          </button>
          <table className="min-w-full text-sm sm:text-base">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Vip Price
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Vvip Price
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Ngedate Price
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Ngedate Premium Price
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Rame Price
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Rame Premium Price
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b hover:bg-gray-100">
                  <td className="p-2 sm:p-3">Rp {event.vipPrice}</td>
                  <td className="p-2 sm:p-3">Rp {event.vvipPrice}</td>
                  <td className="p-2 sm:p-3">Rp {event.ngedatePrice}</td>
                  <td className="p-2 sm:p-3">Rp {event.ngedatePremiumPrice}</td>
                  <td className="p-2 sm:p-3">Rp {event.ramePrice}</td>
                  <td className="p-2 sm:p-3">Rp {event.ramePremiumPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      {isOpen && (
        <PriceModal
          handlePriceAdded={handlePriceAdded}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default ViewPriceDashboard;
