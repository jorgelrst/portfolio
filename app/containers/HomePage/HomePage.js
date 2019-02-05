import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  Row, Col
} from 'react-bootstrap';

import './style.scss';

export default class HomePage extends React.PureComponent {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { loading, error } = this.props;

    return (
      <section className="landing-section">
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Landing Page" />
        </Helmet>
        <div className="home-page">
          <section className="intro">
            <Row>
              <Col><h1 className="name"><div>Jorge</div></h1></Col>
            </Row>
            <Row>
              <Col>
                <h2 className="occupation"><code>Full Stack Developer @ <a href="https://www.onswitchboard.com" target="_blank">Switchboard</a></code></h2>
              </Col>
            </Row>
          </section>
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
