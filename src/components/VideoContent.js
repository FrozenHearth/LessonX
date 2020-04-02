import React, { Component } from 'react';
import '../styles/Videos.css';

export default class VideoContent extends Component {
  render() {
    return (
      <div className="video-container">
        <div className="video-thumbnails-container">
          <div className="thumbnails"></div>
          <div className="thumbnails"></div>
          <div className="thumbnails"></div>
        </div>
      </div>
    );
  }
}
