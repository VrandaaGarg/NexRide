import React from "react";

function RideGuideCrd({ img, model, brand, budget, range }) {
  return (
    <div className="bg-white dark:bg-slate-700 shadow-lg rounded-xl overflow-hidden w-72 h-96 p-6 flex flex-col transition-transform transform hover:scale-105">
      <div className="flex justify-center mb-4">
        <img
          className="w-32 h-32 object-cover rounded-full shadow-md"
          src={img}
          alt={model}
        />
      </div>
      <h2 className="text-2xl font-semibold text-center dark:text-white mb-4">
        {model}
      </h2>
      <div className="text-center flex-1 text-black overflow-y-auto">
        <div className="text-left space-y-2 dark:text-gray-100 ">
          <p>
            <b>Model:</b> {model}
          </p>
          <p>
            <b>Brand:</b> {brand}
          </p>
          <p>
            <b>Price:</b> ₹{budget}
          </p>
          <p>
            <b>Range:</b> {range}km
          </p>
        </div>
      </div>
    </div>
  );
}

export default RideGuideCrd;
