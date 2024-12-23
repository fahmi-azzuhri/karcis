import React, { useState } from "react";
import ViewArtDashboard from "../../../views/admin/dashboard/artDashboard";
function ArtDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleArtAdded = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <ViewArtDashboard
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        handleArtAdded={handleArtAdded}
      />
    </div>
  );
}

export default ArtDashboard;
