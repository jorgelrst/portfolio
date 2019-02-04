import React from 'react';
import PropTypes from 'prop-types';

import videoBackground from 'images/backgrounds/film.mp4';

import './style.scss';

class VideoBackground extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(props) {
    return props.reRender;
  }

  render() {
    const { loop } = this.props;

    return (
      <video className="video-background" loop={loop} autoPlay muted playsInline>
        <source src={videoBackground} type="video/mp4" />
      </video>
    );
  }
}

VideoBackground.defaultProps = {
  reRender: false,
  loop: true,
};

VideoBackground.propTypes = {
  reRender: PropTypes.bool,
  loop: PropTypes.bool,
};

export default VideoBackground;