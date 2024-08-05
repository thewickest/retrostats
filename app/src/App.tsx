import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header/>
      <div className="App">
        <body>
          <Home/>
        </body>
      </div>
    </>
  );
}

export default App;
