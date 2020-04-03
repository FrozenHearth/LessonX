import React, { Component } from 'react';
import { data } from './config/apiConfig';
import Header from './components/Header/Header';
import './App.css';

export default class App extends Component {
  state = {
    recitalTitle: '',
    instrumentTitle: '',
    lessonDetails: []
  };
  componentDidMount() {
    const { recitalTitle, instrumentTitle, lessonDetails } = data;
    this.setState({
      recitalTitle,
      instrumentTitle,
      lessonDetails
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
