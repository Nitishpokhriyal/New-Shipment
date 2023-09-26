// components/Graph.js

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

const Graph = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://api.example.com/sales'; // Replace with your actual API URL

    // Fetch data from the API
    axios.get(apiUrl)
      .then((response) => {
        // Assuming the API response contains an array of sales data
        setSalesData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const data = {
    labels: salesData.map((item) => item.label), // Replace with your data structure
    datasets: [
      {
        label: 'Monthly Sales',
        data: salesData.map((item) => item.value), // Replace with your data structure
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
