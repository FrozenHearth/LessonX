import React, { Component } from 'react';
import '../../styles/Lessons.css';
import SideBar from '../Sidebar';
import VideoContent from '../VideoContent';

export default class Lessons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objectiveDetails: [],
      clickedLessonId: ''
    };
  }

  getClickedLessonNumber = lesson => {
    this.setState({
      objectiveDetails: lesson.objectiveDetails,
      clickedLessonId: lesson.id
    });
  };

  render() {
    const { lessonDetails } = this.props;
    const { objectiveDetails, clickedLessonId } = this.state;
    // console.log(this.props.lessonDetails);
    return (
      <>
        <div className="header-bottom-container">
          <div className="lessons-container">
            <h2 className="lesson-header">Lessons</h2>
            <div className="lesson-numbers-container">
              {lessonDetails
                ? lessonDetails.map((lesson, index) => (
                    <span
                      onClick={() => this.getClickedLessonNumber(lesson)}
                      key={index}
                      className="lesson-numbers-circle"
                      style={
                        clickedLessonId !== lesson.id
                          ? { background: '#ff9811' }
                          : { background: '#fff' }
                      }
                    >
                      <span className="lesson-numbers">
                        {lesson.lessonTitle.replace('Lesson', '')}
                        {/* Remove the word 'Lesson' from the lesson Title & only show Lesson number */}
                      </span>
                    </span>
                  ))
                : ''}
            </div>
            <button className="exit-session-btn">Exit Session</button>
          </div>
        </div>
        <div className="hero-container">
          {objectiveDetails.length !== 0 ? (
            <>
              <SideBar objectiveDetails={objectiveDetails} />
              <VideoContent />
            </>
          ) : null}{' '}
        </div>
      </>
    );
  }
}
