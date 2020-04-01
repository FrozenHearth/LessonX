import React from 'react';

import './App.css';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import VideoContent from './components/VideoContent';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <VideoContent />
    </div>
  );
};

export default App;
