import React, { Component } from 'react';
import '../../styles/Header.css';
import ConductorIcon from '../../assets/images/conductor.png';
import Lessons from './Lessons';

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header-top-container">
          <img src={ConductorIcon} className="conductor-icon" alt="" />
          <h1 className="recital-title">Lavender's Blue</h1>
          <h2 className="instrument-title">Guitar</h2>
        </div>
        <Lessons />
      </>
    );
  }
}
