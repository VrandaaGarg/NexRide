import React from "react";

function FormContainer({ children }) {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        {children}
      </div>
    </div>
  );
}

export default FormContainer;
