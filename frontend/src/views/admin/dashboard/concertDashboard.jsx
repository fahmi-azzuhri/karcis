import React from "react";
import ReadMore from "../../../views/admin/dashboard/readMore";
import AddConcertModal from "../../../components/admin/concertModal";
function ViewConcertDashboard(props) {
  const {
    concerts,
    isOpen,
    handleConcertAdded,
    handleOpenModal,
    handleCloseModal,
  } = props;
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-4 overflow-hidden">
        <div className="flex justify-end items-center mb-4 sm:mb-6">
          <button
            onClick={handleOpenModal}
            className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base"
          >
            + Add Concert
          </button>
        </div>

        {/* Wrapper tabel responsif */}
        <div className="bg-white rounded-md shadow-md overflow-x-auto max-w-full">
          <table className="min-w-full text-sm sm:text-base">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-2 sm:p-3 text-left">Image</th>
                <th className="p-2 sm:p-3 text-left">Title</th>
                <th className="p-2 sm:p-3 text-left hidden md:table-cell">
                  Location
                </th>
                <th className="p-2 sm:p-3 text-left">Date</th>
                <th className="p-2 sm:p-3 text-left hidden lg:table-cell">
                  Start Time
                </th>
                <th className="p-2 sm:p-3 text-left hidden lg:table-cell">
                  End Time
                </th>
                <th className="p-2 sm:p-3 text-left">Audience</th>
                <th className="p-2 sm:p-3 text-left hidden lg:table-cell">
                  Attention
                </th>
                <th className="p-2 sm:p-3 text-left hidden md:table-cell">
                  Description
                </th>
                <th className="p-2 sm:p-3 text-left hidden xl:table-cell">
                  Prices
                </th>
                <th className="p-2 sm:p-3 text-left hidden lg:table-cell">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {concerts.map((concert) => (
                <tr key={concert.id} className="border-b hover:bg-gray-100">
                  <td className="p-2 sm:p-3">
                    <img
                      src={`http://localhost:3000${concert.imageUrl}`}
                      alt={concert.title}
                      className="w-full h-20 object-cover rounded"
                    />
                  </td>
                  <td className="p-2 sm:p-3">{concert.title}</td>
                  <td className="p-2 sm:p-3 hidden md:table-cell">
                    {concert.location}
                  </td>
                  <td className="p-2 sm:p-3">
                    {new Date(concert.date).toLocaleDateString()}
                  </td>
                  <td className="p-2 sm:p-3 hidden lg:table-cell">
                    {new Date(concert.startTime).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="p-2 sm:p-3 hidden lg:table-cell">
                    {new Date(concert.endTime).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="p-2 sm:p-3">{concert.audience}</td>
                  <td className="p-2 sm:p-3 hidden lg:table-cell">
                    {concert.attention}
                  </td>
                  <td className="p-2 sm:p-3 hidden md:table-cell">
                    <ReadMore text={concert.description} maxLength={40} />
                  </td>
                  <td className="p-2 sm:p-3 hidden xl:table-cell">
                    <ul>
                      <li>VIP: {concert.vipPrice}</li>
                      <li>VVIP: {concert.vvipPrice}</li>
                      <li>Ngedate: {concert.ngedatePrice}</li>
                      <li>Premium: {concert.ngedatePremiumPrice}</li>
                      <li>Rame: {concert.ramePrice}</li>
                      <li>Premium: {concert.ramePremiumPrice}</li>
                    </ul>
                  </td>
                  <td className="p-2 sm:p-3 hidden xl:table-cell">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <button
                          // onClick={() => handleEditEvent(concert)}
                          className="text-white hover:bg-blue-600 py-2 px-4 rounded-md bg-blueDefault"
                        >
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          // onClick={() => deleteEvents(concert.id)}
                          className="text-white hover:bg-red-600 py-2 px-4 rounded-md bg-red-400"
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      {isOpen && (
        <AddConcertModal
          handleCloseModal={handleCloseModal}
          handleConcertAdded={handleConcertAdded}
        />
      )}
    </div>
  );
}

export default ViewConcertDashboard;
