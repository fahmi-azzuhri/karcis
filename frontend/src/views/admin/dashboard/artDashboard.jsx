import React from "react";
import AddArtModal from "../../../components/admin/artModal";
import ReadMore from "./readMore";
function ViewArtDashboard(props) {
  const { isOpen, handleCloseModal, handleOpenModal, handleArtAdded, arts } =
    props;
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
              {arts.map((art) => (
                <tr className="border-b hover:bg-gray-100">
                  <td className="p-2 sm:p-3">
                    <img
                      src={`http://localhost:3000${art.imageUrl}`}
                      alt={art.title}
                      className="w-full h-20 object-cover rounded"
                    />
                  </td>
                  <td className="p-2 sm:p-3">{art.title}</td>
                  <td className="p-2 sm:p-3 hidden md:table-cell">
                    {art.location}
                  </td>
                  <td className="p-2 sm:p-3">
                    {new Date(art.date).toLocaleDateString()}
                  </td>
                  <td className="p-2 sm:p-3 hidden lg:table-cell">
                    {new Date(art.startTime).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="p-2 sm:p-3 hidden lg:table-cell">
                    {new Date(art.endTime).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="p-2 sm:p-3">{art.audience}</td>
                  <td className="p-2 sm:p-3 hidden lg:table-cell">
                    {art.attention}
                  </td>
                  <td className="p-2 sm:p-3 hidden md:table-cell">
                    <ReadMore text={art.description} maxLength={40} />
                  </td>
                  <td className="p-2 sm:p-3 hidden xl:table-cell">
                    <ul>
                      <li>VIP: {art.vipPrice}</li>
                      <li>VVIP: {art.vvipPrice}</li>
                      <li>Ngedate: {art.ngedatePrice}</li>
                      <li>Premium: {art.ngedatePremiumPrice}</li>
                      <li>Rame: {art.ramePrice}</li>
                      <li>Premium: {art.ramePremiumPrice}</li>
                    </ul>
                  </td>
                  <td className="p-2 sm:p-3 hidden xl:table-cell">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <button
                          // onClick={() => handleEditEvent(event)}
                          className="text-white hover:bg-blue-600 py-2 px-4 rounded-md bg-blueDefault"
                        >
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          // onClick={() => deleteEvents(event.id)}
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
        <AddArtModal
          handleCloseModal={handleCloseModal}
          handleArtAdded={handleArtAdded}
        />
      )}
    </div>
  );
}

export default ViewArtDashboard;
