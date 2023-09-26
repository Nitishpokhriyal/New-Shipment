import React from "react";
import { useState } from "react";
import axios from "axios";

const index = () => {
  const [VehicleNumber, setVehicleNumber] = useState();
  const [LicenseNumber, setLicenseNumber] = useState();
  const [ContactNumber, setContactNumber] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const intValue1 = parseInt(VehicleNumber, 10);
    const intValue2 = parseInt(LicenseNumber, 10);
    const intValue3 = parseInt(ContactNumber, 10);
    axios
      .post("http://localhost:3000/api/driver", {
        intValue1,
        intValue2,
        intValue3,
      })
      .then((res) => {
        // router.push('/Login')
        alert("Data Inserted Sucessfully");
      })
      .catch((err) => console.log(err));
  };
  return (

    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Driver Form</h2>
      <form  onSubmit={handleSubmit}>
      
        <div className="mb-4">
          <label htmlFor="vehicleNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Vehicle Number
          </label>
          <input
            type="text"
            id="VehicleNumber"
            name="VehicleNumber"
            onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter Vehicle Number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="licenseNumber" className="block text-gray-700 text-sm font-bold mb-2">
            License Number
          </label>
          <input
            type="text"
            id="LicenseNumber"
            name="LicenseNumber"
            onChange={(e) => setLicenseNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter License Number"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Contact Number
          </label>
          <input
            type="text"
            id="ContactNumber"
            name="ContactNumber"
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter Contact Number"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

  );
};

export default index;
