import React, { useState } from "react";
import { useSelector } from "react-redux";

function Track() {
  const [trackingId, setTrackingId] = useState("");
  const [deliveryStatuses, setDeliveryStatuses] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  // Handle form submit to get delivery status
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/customer/order/${trackingId}`
      );
      const data = await response.json();
      setDeliveryStatuses(data.deliveryStatuses);
      updateCheckboxes(data.deliveryStatuses);
    } catch (error) {
      console.error("Error retrieving order:", error);
    }
  };

  // Update checkbox array based on the status and checked value
  const handleCheckboxChange = (status, isChecked) => {
    if (isChecked) {
      setDeliveryStatuses((prevStatuses) => [...prevStatuses, status]); // Add to array
    } else {
      setDeliveryStatuses((prevStatuses) =>
        prevStatuses.filter((s) => s !== status) // Remove from array
      );
    }
  };

  // Update the checkbox status based on retrieved deliveryStatuses
  const updateCheckboxes = (statuses) => {
    setDeliveryStatuses(statuses);
  };

  // Submit updated statuses to server
  const submitStatuses = async () => {
    try {
      const response = await fetch("http://localhost:5173/seller/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trackingId: trackingId || "existing-tracking-id", // Replace with actual tracking ID
          deliveryStatuses: deliveryStatuses,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error updating statuses:", error);
    }
  };

  return (
    <div className="py-20">
      {/* Form to retrieve delivery status */}
      <form onSubmit={handleFormSubmit} className="flex justify-center gap-5 text-2xl">
        <label htmlFor="trackingId">Enter tracking ID:</label>
        <input
          type="text"
          id="trackingId"
          name="trackingId"
          value={trackingId}
           className="border border-black rounded-2xl"
          onChange={(e) => setTrackingId(e.target.value)}
        />
        <button type="submit" className="">Get Delivery Status</button>
      </form>

      {/* Display checkboxes and allow signed-in users to interact */}
      {userInfo && (
        <div className="flex flex-col pl-10 text-xl">
          <label>
            <input
              type="checkbox"
              id="manufacturer"
              name="deliveryStatus"
              value="Manufacturer"
              checked={deliveryStatuses.includes("Manufacturer")}
              onChange={(e) =>
                handleCheckboxChange("Manufacturer", e.target.checked)
              }
            />
            Manufacturer
          </label>

          <label>
            <input
              type="checkbox"
              id="bikesetuYard"
              name="deliveryStatus"
              value="Bikesetu Yard"
              checked={deliveryStatuses.includes("Bikesetu Yard")}
              onChange={(e) =>
                handleCheckboxChange("Bikesetu Yard", e.target.checked)
              }
            />
            Bikesetu Yard
          </label>

          <label>
            <input
              type="checkbox"
              id="franchiseeStore"
              name="deliveryStatus"
              value="Franchisee Store"
              checked={deliveryStatuses.includes("Franchisee Store")}
              onChange={(e) =>
                handleCheckboxChange("Franchisee Store", e.target.checked)
              }
            />
            Franchisee Store
          </label>

          <label>
            <input
              type="checkbox"
              id="customer"
              name="deliveryStatus"
              value="Customer"
              checked={deliveryStatuses.includes("Customer")}
              onChange={(e) =>
                handleCheckboxChange("Customer", e.target.checked)
              }
            />
            Customer
          </label>

          <label>
            <input
              type="checkbox"
              id="ownershipWithCustomer"
              name="deliveryStatus"
              value="Ownership with Customer"
              checked={deliveryStatuses.includes("Ownership with Customer")}
              onChange={(e) =>
                handleCheckboxChange("Ownership with Customer", e.target.checked)
              }
            />
            Ownership with Customer
          </label>

          {/* <button onClick={submitStatuses}>Submit Delivery Statuses</button> */}
        </div>
      )}

      {/* Display delivery status */}
      {deliveryStatuses && (
        <p className="text-lg pl-10">Selected Delivery Statuses: {deliveryStatuses.join(", ")}</p>
      )}
    </div>
  );
}

export default Track;
