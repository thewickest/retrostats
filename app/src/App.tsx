import React from 'react';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LeaderBoard from './components/leaderBoard/LeaderBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="home" element={<Home />} />
          <Route path="leaderboard" element={<LeaderBoard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
