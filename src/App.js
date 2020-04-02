import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import axios from 'axios';

export default class App extends Component {
  state = {
    recitalTitle: '',
    instrumentTitle: '',
    lessonDetails: []
  };
  componentDidMount() {
    axios.get('https://api.myjson.com/bins/qubzl').then(res => {
      const { recitalTitle, instrumentTitle, lessonDetails } = res.data;
      this.setState({
        recitalTitle,
        instrumentTitle,
        lessonDetails
      });
    });
  }
  render() {
    const { recitalTitle, instrumentTitle, lessonDetails } = this.state;
    return (
      <div className="container">
        <Header
          recitalTitle={recitalTitle}
          instrumentTitle={instrumentTitle}
          lessonDetails={lessonDetails}
        />
      </div>
    );
  }
}
