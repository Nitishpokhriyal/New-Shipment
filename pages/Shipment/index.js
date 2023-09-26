import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
const index = () => {
  const[CustomerName,setCustomerName]=useState('');
  const[DestinationAddress,setDestinationAddress]=useState('');
  const[Shipment_Status,setShipmentStatus]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:3000/api/Shipment", {
        CustomerName,
        DestinationAddress,
        Shipment_Status
      })
      .then((res) => {
        // router.push('/Login')
        alert("Data Inserted Sucessfully");
      })
      .catch((err) => console.log(err));
  };


  return (
 
    <div className="max-w-md mx-auto mt-5 p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Shipment Details</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
          Customer Name
        </label>
        <input
          type="text"
          id="CustomerName"
          name="CustomerName"
          onChange={(e) => setCustomerName(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter Customer Name"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="destinationAddress" className="block text-sm font-medium text-gray-700">
          Destination Address
        </label>
        <textarea
          id="DestinationAddress"
          name="DestinationAddress"
          rows="4"
          onChange={(e) => setDestinationAddress(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter Destination Address"
        ></textarea>
      </div>
  
      <div className="mb-4">
        <label htmlFor="shipmentStatus" className="block text-sm font-medium text-gray-700">
          Shipment Status
        </label>
        <input
          type="text"
          id="ShipmentStatus"
          name="ShipmentStatus"
          onChange={(e) => setShipmentStatus(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter Customer Name"
        />
      </div>
  
      <div className="mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  

  )
}

export default index

