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
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Landing Page" />
        </Helmet>
        <div className="home-page">
          <section>
            <Row>
              <Col>George Li</Col>
            </Row>
            <Row>
              <Col>Full Stack Developer @ Switchboard</Col>
            </Row>
          </section>
        </div>
      </article>
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
