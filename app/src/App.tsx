// import Home from './pages/home/Home';

import Header from "src/components/header/Header";

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Leaderboard from './components/leaderboard/Leaderboard';
// import Scoreboard from './components/scoreboard/Scoreboard';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Header/>}>
    //       {/* <Route path="" element={<Home route='pages/home'/>} /> */}
    //       <Route path="leaderboard" element={<Leaderboard route='sessions/leaderBoard'/>} />
    //       <Route path="leaderBoard/:slug" element={<Scoreboard />} />
    //       <Route path="leaderBoard/:slug/:page" element={<Scoreboard />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <Header/>
  );
}

export default App;
