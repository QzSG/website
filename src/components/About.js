import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import { Card, CardBody, CardText } from 'reactstrap';
import {Helmet} from 'react-helmet';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart';
import {faCoffee,faCode} from '@fortawesome/fontawesome-free-solid';
import './../styles/About.css';
import avatar from './../images/me.svg';

class Home extends Component {
  render() {
    return (
      <Row className="text-dark justify-content-center align-items-center mb-0 mx-0 d-flex flex-grow-1 bg-custom">
      <Helmet>
        <title>QzSG | About</title>
        <meta name="description" content="Learn more about QzSG!" />
      </Helmet>
      <Row className="align-self-center justify-content-center">
        <Card body outline className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-10">
            <CardBody>
            <Row className='justify-content-center'>
              <Col xs='9' sm='8' md='6'  lg='5'>
                <img src={avatar} className="rounded-circle img-fluid" alt="My avatar" />
              </Col>
            </Row>
            </CardBody>
            <CardText tag='h3' style={{ fontFamily:'Raleway'}} >Adrian Tan</CardText>
            <CardText tag='p' className="lead">Technology Ninja</CardText>
            <CardText tag='p' className="text-justify align-self-center">
            <FontAwesomeIcon icon={faHeart}/> playing with the latest technology and reading about the latest science & technology innovations.<br/>
            Likes to read books and listen to music when bored. Turns copious amounts of <FontAwesomeIcon icon={faCoffee}/> into awesome <FontAwesomeIcon icon={faCode}/> !
            </CardText>
        </Card>
      </Row>
      
    </Row>
    );
  }
}
export default Home;