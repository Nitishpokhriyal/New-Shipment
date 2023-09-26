import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/showshipment'); // Replace with your API endpoint
      setData(response.data); 
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mx-auto mt-10">
    <h1 className="text-2xl font-bold mb-4 text-center">Shipment Table</h1>
    {loading ? (
      <p className="text-center">Loading...</p>
    ) : (
      <table className="min-w-full divide-y divide-Blue-200 border-black">
        <thead className="bg-blue-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
            Shipments_ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
            Customers_Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
            Destination_Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
            Assigned_Driver_Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
            Shipment_Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
            Planned_Delivery_Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
            Actual_Delivery_Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.ShipmentId}>
        
              <td className="px-6 py-4 whitespace-nowrap">
                {item.ShipmentId || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.CustomerName || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.DestinationAddress || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.AssignedDriverId || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.Shipment_Status || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.PlannedDriverDate || 'N/A'}
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                {item.ActualDeliveryDate || 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
    )
}

export default index