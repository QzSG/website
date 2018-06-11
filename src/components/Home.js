import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {Helmet} from 'react-helmet';
import './../styles/Home.css';

class Home extends Component {
  render() {
    return (
        <Row className="text-white justify-content-center align-items-center mb-0 mx-0 d-flex flex-grow-1 bg-custom">
          <Helmet>
            <title>QzSG | Home</title>
            <meta name="description" content="Welcome to QzSG personal website!" />
          </Helmet>
          <Row className="justify-content-center align-items-center">
            <Col md="5" sm="12" className="text-justify"><h3>Remember to look up at the Stars and not down at your feet</h3></Col>
            <Col md="5" sm="12" className="text-right"><h3>Stephen Hawking</h3></Col>
          </Row>
        </Row>
    );
  }
}
export default Home;