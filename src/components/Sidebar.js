import React, { Component } from 'react';
import '../styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faEdit
} from '@fortawesome/free-solid-svg-icons/';

export default class SideBar extends Component {
  render() {
    console.log(this.props);
    const { objectiveDetails } = this.props;
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
                  <div className="objectives" key={objective.id}>
                    <span className="objective-title">
                      {objective.title}
                      <span className="objective-duration">
                        ({objective.durationInMinutes} mins)
                      </span>
                    </span>

                    <span className="icon-container">
                      <a href="#/" className="check-icon">
                        <FontAwesomeIcon
                          className="fa-lg"
                          icon={faCheckCircle}
                        />
                      </a>
                      <a href="#/" className="cross-icon">
                        <FontAwesomeIcon
                          className="fa-lg"
                          icon={faTimesCircle}
                        />
                      </a>
                      <a href="#/" className="edit-icon">
                        <FontAwesomeIcon className="fa-lg" icon={faEdit} />
                      </a>
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
