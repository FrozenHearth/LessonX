import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../styles/Videos.css';
import PlayIcon from './utils/PlayIcon';

export default class VideoContent extends Component {
  constructor(props) {
    super(props);
    this.reactPlayerRef = React.createRef();
  }

  render() {
    const { objectiveVideosDetails } = this.props;
    const { backgroundImg } = this.state;
    return (
      <div
        style={{ background: `url(${backgroundImg})` }}
        className="video-container"
      >
        <div className="video-thumbnails-container">
          {objectiveVideosDetails
            ? objectiveVideosDetails.map(video => (
                <div className="thumbnails" key={video.id}>
                  <ReactPlayer
                    ref={this.reactPlayerRef}
                    width="100%"
                    height="100%"
                    light={true}
                    playIcon={<PlayIcon />}
                    controls={true}
                    url={video.url}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}
