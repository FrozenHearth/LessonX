import React, { Component } from 'react';
import '../../styles/Lessons.css';

export default class Lessons extends Component {
  render() {
    return (
      <div className="header-bottom-container">
        <div className="lessons-container">
          <h2 className="lesson-header">Lessons</h2>
          <div className="lesson-numbers-container">
            <span className="lesson-numbers-circle">
              <span className="lesson-numbers">1</span>
            </span>
            <span className="lesson-numbers-circle">
              <span className="lesson-numbers">2</span>
            </span>
            <span className="lesson-numbers-circle">
              <span className="lesson-numbers">3</span>
            </span>
            <span className="lesson-numbers-circle">
              <span className="lesson-numbers">4</span>
            </span>
            <span className="lesson-numbers-circle">
              <span className="lesson-numbers">5</span>
            </span>
            <span className="lesson-numbers-circle">
              <span className="lesson-numbers">6</span>
            </span>
            <span className="lesson-numbers-circle">
              <span className="lesson-numbers">7</span>
            </span>
          </div>
          <button className="exit-session-btn">Exit Session</button>
        </div>
      </div>
    );
  }
}
