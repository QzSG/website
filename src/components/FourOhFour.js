import React, {Component} from 'react';
import { Row, Col ,
    Nav as NavStrap,
    NavItem,
    NavLink
} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

import {Helmet} from 'react-helmet';
import './../styles/FourOhFour.css';

class FourOhFour extends Component {
  render() {
    return (
        <Row className="text-white justify-content-center align-items-center mb-0 mx-0 d-flex flex-grow-1 bg-custom">
          <Helmet>
            <title>QzSG | Time Travel Prohibited</title>
            <meta name="description" content="Time Travel Prohibited!" />
          </Helmet>
          <Row className="justify-content-center align-items-center">
            <Col md="5" sm="12" className="text-justify"><h3>Sorry, your destination does not exist in this universe!</h3></Col>
            <Col md="5" sm="12" className="text-right">
              <NavStrap navbar>
                <NavItem>
                  <h3 className="text-white">
                    <NavLink tag={Link} exact to="/" activeClassName="active">Go Back</NavLink>
                  </h3>
                </NavItem>
              </NavStrap>
            </Col>
          </Row>
        </Row>
    );
  }
}
export default FourOhFour;