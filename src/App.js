import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
//import logo from './logo.svg';
import './styles/App.css';

import Nav from './components/Nav';
import Particles from "react-tsparticles";
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const FourOhFour = React.lazy(() => import('./components/FourOhFour'));
class App extends Component {
  render() {
    return (

      <Router>
        <Container fluid className="App d-flex flex-column">
          <Helmet>
            <title>QzSG | Home</title>
            <meta name="description" content="Welcome to QzSG personal website!" />
          </Helmet>

          <Nav />
          <Particles 
      id="tsparticles"
      options={{
        "particles": {
          "number": {
            "value": 500,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.2,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 85,
              "size": 2,
              "duration": 3,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        detectRetina: true,
      }}/>

          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route component={FourOhFour} />
            </Switch>

          </Suspense>

        </Container>
      </Router>

    );
  }
}

export default App;
