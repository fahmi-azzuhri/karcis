import React from "react";
import ViewArtModal from "../../../views/admin/artModal";

function AddArtModal(props) {
  const { handleCloseModal, handleArtAdded } = props;
  return (
    <div>
      <ViewArtModal
        handleArtAdded={handleArtAdded}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}

export default AddArtModal;
