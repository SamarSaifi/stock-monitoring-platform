import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import WatchlistManager from './components/WatchlistManager';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/watchlist">
          <WatchlistManager />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;