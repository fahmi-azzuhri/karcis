import React from "react";
import { Toaster } from "react-hot-toast";

function Toastt() {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          success: {
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
        }}
      />
    </div>
  );
}

export default Toastt;
