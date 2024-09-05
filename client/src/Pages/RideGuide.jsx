import React, { useState, useEffect } from "react";
import VehicleData from "../Data/VehicleData";
import RideGuideCrd from "../Components/RideGuideCrd/RideGuideCrd";

function RideGuide() {
  const [vehicleInput, setVehicleInput] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedRange, setSelectedRange] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showHelpOptions, setShowHelpOptions] = useState(false); // Toggle for question buttons
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    const filterData = () => {
      let filtered = VehicleData;

      if (vehicleInput) {
        filtered = filtered.filter((item) =>
          item.model.toLowerCase().includes(vehicleInput.toLowerCase())
        );
      }

      if (selectedBudget) {
        filtered = filtered.filter(
          (item) => item.budget <= parseFloat(selectedBudget)
        );
      }

      if (selectedRange) {
        filtered = filtered.filter(
          (item) => item.range >= parseFloat(selectedRange)
        );
      }

      if (selectedBrand) {
        filtered = filtered.filter((item) => item.brand === selectedBrand);
      }

      setFilteredData(filtered);
    };

    filterData();
  }, [vehicleInput, selectedBudget, selectedRange, selectedBrand]);

  const brands = [...new Set(VehicleData.map((item) => item.brand))];

  const getRecommendation = (question) => {
    switch (question) {
      case "Most liked vehicle":
        return filteredData[0]; // Replace with actual logic for most liked vehicle
      case "Perfect vehicle for daily use":
        return filteredData.find((item) => item.range >= 100); // Replace with criteria for daily use
      case "Best budget vehicle":
        return filteredData.sort((a, b) => a.budget - b.budget)[0]; // Replace with best budget vehicle logic
      default:
        return null;
    }
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setRecommendation(getRecommendation(question));
  };

  const closeRecommendation = () => {
    setSelectedQuestion("");
    setRecommendation(null);
  };

  return (
    <div className="pt-20 pb-16 dark:bg-gray-900 relative">
      {/* Search Input */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <input
          type="text"
          className="border-2 border-gray-300 dark:border-black text-gray-700 rounded-2xl p-3 dark:text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-slate-300"
          placeholder="Search vehicle..."
          value={vehicleInput}
          onChange={(e) => setVehicleInput(e.target.value)}
        />
      </div>

      {/* Budget, Range, Brand Filter */}
      <div className="flex justify-center gap-7 mb-8">
        <select
          className="border-2 border-gray-300 dark:border-black dark:text-black text-gray-700 rounded-2xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-slate-400"
          value={selectedBudget}
          onChange={(e) => setSelectedBudget(e.target.value)}
        >
          <option value="">Select Budget</option>
          <option value="50000">Up to 50,000</option>
          <option value="100000">Up to 1,00,000</option>
          <option value="150000">Up to 1,50,000</option>
          <option value="200000">Up to 2,00,000</option>
        </select>
        <select
          className="border-2 border-gray-300 dark:border-black dark:text-black text-gray-700 rounded-2xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-slate-400"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option value="">Select Range</option>
          <option value="50">Up to 50 km</option>
          <option value="100">Up to 100 km</option>
          <option value="150">Up to 150 km</option>
          <option value="200">Up to 200 km</option>
        </select>
        <select
          className="border-2 border-gray-300 dark:border-black dark:text-black text-gray-700 rounded-2xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-slate-400"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Select Brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Filtered Vehicle Cards */}
      <div className="flex flex-wrap justify-center gap-7 mt-8">
        {filteredData.map((val) => (
          <div key={val.id}>
            <RideGuideCrd
              img={val.imgUrl}
              brand={val.brand}
              model={val.model}
              budget={val.budget}
              range={val.range}
            />
          </div>
        ))}
      </div>

      {/* Need Help Button */}
      <div className="fixed bottom-10 right-10 ">
        <button
          onClick={() => setShowHelpOptions(!showHelpOptions)}
          className="bg-blue-300 px-2 py-1 z-30 rounded-xl"
        >
          Need Help ❓
        </button>
      </div>

      {/* Predefined Questions (visible only when Need Help is clicked) */}
      {showHelpOptions && (
        <div className="fixed bottom-16 right-10 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-2">Choose a question:</h3>
          <button
            onClick={() => handleQuestionClick("Most liked vehicle")}
            className="bg-blue-300 px-2 py-1 mb-2 rounded-lg block w-full"
          >
            Most Liked Vehicle
          </button>
          <button
            onClick={() => handleQuestionClick("Perfect vehicle for daily use")}
            className="bg-blue-300 px-2 py-1 mb-2 rounded-lg block w-full"
          >
            Perfect Vehicle for Daily Use
          </button>
          <button
            onClick={() => handleQuestionClick("Best budget vehicle")}
            className="bg-blue-300 px-2 py-1 rounded-lg block w-full"
          >
            Best Budget Vehicle
          </button>
        </div>
      )}

      {/* Recommendation Display */}
      {selectedQuestion && recommendation && (
        <div className="fixed bottom-32 right-10 bg-white p-7 rounded-lg shadow-lg ">
          <button
            onClick={closeRecommendation}
            className="absolute top-2 right-2 text-gray-600 font-bold"
          >
            X
          </button>
          <h3 className="font-semibold mb-2">
            {selectedQuestion} Recommendation:
          </h3>
          <div className="flex items-center gap-4">
            <img
              src={recommendation.imgUrl}
              alt={recommendation.model}
              className="w-24 h-16 object-cover"
            />
            <div>
              <p>
                {recommendation.brand} {recommendation.model}
              </p>
              <p>Budget: {recommendation.budget}</p>
              <p>Range: {recommendation.range} km</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RideGuide;
