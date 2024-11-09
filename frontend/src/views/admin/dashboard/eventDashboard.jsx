import React from "react";
import AddEventModal from "../../../components/admin/eventModal";

function ViewEventDashboard(props) {
  const {
    handleCloseModal,
    handleOpenModal,
    events,
    handleEventAdded,
    isOpen,
  } = props;
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-4 overflow-hidden">
        <div className="flex justify-end items-center mb-4 sm:mb-6">
          <button
            onClick={handleOpenModal}
            className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base"
          >
            + Add Event
          </button>
        </div>

        <div className="bg-white rounded-md shadow-md overflow-x-auto max-w-full">
          <table className="min-w-full text-sm sm:text-base">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Title
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Location
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Date
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Start Time
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  End Time
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Audience
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Attention
                </th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                  Description
                </th>
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
                  <td className="p-2 sm:p-3">{event.title}</td>
                  <td className="p-2 sm:p-3">{event.location}</td>
                  <td className="p-2 sm:p-3">
                    {new Date(event.date).toLocaleDateString()}
                  </td>
                  <td className="p-2 sm:p-3">{event.startTime}</td>
                  <td className="p-2 sm:p-3">{event.endTime}</td>
                  <td className="p-2 sm:p-3">{event.audience}</td>
                  <td className="p-2 sm:p-3">{event.attention}</td>
                  <td className="p-2 sm:p-3">{event.description}</td>
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
        <AddEventModal
          onClose={handleCloseModal}
          onEventAdded={handleEventAdded}
        />
      )}
    </div>
  );
}

export default ViewEventDashboard;
