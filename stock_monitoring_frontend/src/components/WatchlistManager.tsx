import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WatchlistItem {
  id: number;
  stock_symbol: string;
}

const WatchlistManager: React.FC = () => {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [newSymbol, setNewSymbol] = useState('');

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get('/watchlist-items/');
        setWatchlist(response.data);
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
    };

    fetchWatchlist();
  }, []);

  const handleAddSymbol = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/watchlist-items/', {
        stock_symbol: newSymbol,
      });
      setWatchlist([...watchlist, response.data]);
      setNewSymbol('');
    } catch (error) {
      console.error('Error adding symbol:', error);
    }
  };

  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map((item) => (
          <li key={item.id}>{item.stock_symbol}</li>
        ))}
      </ul>
      <form onSubmit={handleAddSymbol}>
        <input
          type="text"
          value={newSymbol}
          onChange={(e) => setNewSymbol(e.target.value)}
          placeholder="Enter stock symbol"
        />
        <button type="submit">Add Symbol</button>
      </form>
    </div>
  );
};

export default WatchlistManager;