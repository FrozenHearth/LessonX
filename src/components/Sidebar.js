import React, { Component } from 'react';
import '../styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faEdit
} from '@fortawesome/free-solid-svg-icons/';

export default class SideBar extends Component {
  state = {
    done: false,
    notDoing: false,
    nextClass: false,
    clickedObjectiveId: ''
  };
  done = id => {
    this.setState({
      done: true,
      notDoing: false,
      nextClass: false,
      clickedObjectiveId: id
    });
  };
  notDoing = id => {
    this.setState({
      notDoing: true,
      done: false,
      nextClass: false,
      clickedObjectiveId: id
    });
  };
  nextClass = id => {
    this.setState({
      nextClass: true,
      done: false,
      notDoing: false,
      clickedObjectiveId: id
    });
  };
  render() {
    const { objectiveDetails } = this.props;
    const { done, notDoing, nextClass, clickedObjectiveId } = this.state;
    return (
      <section className="sidebar-container">
        <div className="menu-top">
          <h2 className="menu-content-title">Menu</h2>
        </div>
        <div className="menu-bottom">
          <div className="links-container">
            <a href="#/">Video Link 1</a>
            <a href="#/">Video Link 2</a>
            <a href="#/">Video Link 3</a>
          </div>
          <div className="objectives-container">
            {objectiveDetails
              ? objectiveDetails.map(objective => (
                  <div
                    style={
                      done && clickedObjectiveId === objective.id
                        ? { border: '0.2em solid #81e26e' }
                        : notDoing && clickedObjectiveId === objective.id
                        ? { border: '0.2em solid red' }
                        : nextClass && clickedObjectiveId === objective.id
                        ? { border: '0.2em solid blue' }
                        : { border: 'none' }
                    }
                    className="objectives"
                    key={objective.id}
                  >
                    <span className="objective-title">
                      {objective.title}
                      <span className="objective-duration">
                        ({objective.durationInMinutes} mins)
                      </span>
                    </span>

                    <span className="icon-container">
                      <span
                        onClick={() => this.done(objective.id)}
                        className="check-icon"
                      >
                        <FontAwesomeIcon
                          className="fa-lg"
                          icon={faCheckCircle}
                        />
                      </span>
                      <span
                        onClick={() => this.notDoing(objective.id)}
                        className="cross-icon"
                      >
                        <FontAwesomeIcon
                          className="fa-lg"
                          icon={faTimesCircle}
                        />
                      </span>
                      <span
                        onClick={() => this.nextClass(objective.id)}
                        className="edit-icon"
                      >
                        <FontAwesomeIcon className="fa-lg" icon={faEdit} />
                      </span>
                    </span>
                  </div>
                ))
              : ''}
            {/* 
            <div className="objectives">
              <h2 className="objective-title">C5 Finger Scale RH</h2>
              <span className="objective-duration">(15 Mins)</span>
              <span className="icon-container">
                <a href="#/" className="check-icon">
                  <FontAwesomeIcon className="fa-lg" icon={faCheckCircle} />
                </a>
                <a href="#/" className="cross-icon">
                  <FontAwesomeIcon className="fa-lg" icon={faTimesCircle} />
                </a>
                <a href="#/" className="edit-icon">
                  <FontAwesomeIcon className="fa-lg" icon={faEdit} />
                </a>
              </span>
            </div>

            <div className="objectives">
              <h2 className="objective-title">E5 Finger Scale LH</h2>
              <span className="objective-duration">(15 Mins)</span>
              <span className="icon-container">
                <a href="#/" className="check-icon">
                  <FontAwesomeIcon className="fa-lg" icon={faCheckCircle} />
                </a>
                <a href="#/" className="cross-icon">
                  <FontAwesomeIcon className="fa-lg" icon={faTimesCircle} />
                </a>
                <a href="#/" className="edit-icon">
                  <FontAwesomeIcon className="fa-lg" icon={faEdit} />
                </a>
              </span>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
