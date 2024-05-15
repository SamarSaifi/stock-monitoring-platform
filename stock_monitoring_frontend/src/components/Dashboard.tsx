import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface StockData {
  symbol: string;
  latest_price: string;
  timestamp: string;
}

const StockDashboard: React.FC = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get('/api/watchlist-data/');
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      <h2>Stock Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Latest Price</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((data, index) => (
            <tr key={index}>
              <td>{data.symbol}</td>
              <td>{data.latest_price}</td>
              <td>{data.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockDashboard;