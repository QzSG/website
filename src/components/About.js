import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import './../styles/Home.css';

class Home extends Component {
  render() {
    return (
        <Row className="text-white justify-content-center align-items-center mb-0 mx-0 d-flex flex-grow-1">
          <Row className="justify-content-center">
            <Col md="12" sm="12" className="text-justify"><h2>Hey!</h2></Col>
        </Row></Row>
    );
  }
}
export default Home;