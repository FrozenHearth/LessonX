import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar';
import VideoContent from './components/VideoContent';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="hero-container">
        <SideBar />
        <VideoContent />
      </div>
    </div>
  );
};

export default App;
