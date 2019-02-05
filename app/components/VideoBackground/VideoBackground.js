import React from 'react';
import PropTypes from 'prop-types';

import filmBackground from 'images/backgrounds/film.mp4';
import blackPlexusBackground from 'images/backgrounds/black-plexus.mp4';

import './style.scss';

class VideoBackground extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundSource: filmBackground,
    };
    this.updateBackground = this.updateBackground.bind(this);
  }
  
  componentDidMount() {
    document.getElementById('link-home').onmouseover = () => {
      this.updateBackground(filmBackground);
    };

    document.getElementById('link-blog').onmouseover = () => {
      console.log('hey');
      this.updateBackground(blackPlexusBackground);
    };
  }

  shouldComponentUpdate(props) {
    return props.reRender;
  }

  updateBackground(backgroundSource) {
    console.log(backgroundSource);
    this.setState({ ...this.state, backgroundSource });
  }

  render() {
    const { loop } = this.props;
    const { backgroundSource } = this.state;

    return (
      <video className="video-background" loop={loop} autoPlay muted playsInline>
        <source src={backgroundSource} type="video/mp4" />
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