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
          <Route path="" element={<Home route='pages/home'/>} />
          <Route path="leaderboard" element={<LeaderBoard route='sessions/leaderBoard'/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
