import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
//import logo from './logo.svg';
import './styles/App.css';

import Nav from './components/Nav';

//import Particles from "react-tsparticles";

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const FourOhFour = React.lazy(() => import('./components/FourOhFour'));

const desktopSrc = require("./images/bg-desktop.jpg")
const mobileSrc = require("./images/bg-mobile.jpg")
class App extends Component {
  render() {
    return (
      <>
        <picture className='image-full'>
          <source media="(min-width:1024px)" srcSet={desktopSrc}/>
          <source media="(min-width:300px)" srcSet={mobileSrc}/>
          <img src={desktopSrc} alt="looking at the stars"/>
        </picture>
        <Router>
          <Container fluid className="App d-flex flex-column">
            <Helmet>
              <title>QzSG | Home</title>
              <meta name="description" content="Welcome to QzSG personal website!" />
            </Helmet>

            <Nav />
            

            <Suspense fallback={<div></div>}>
              <Routes>
                <Route exact path="/" element={ <Home />} />
                <Route exact path="/about" element={ <About/>} />
                <Route path="*" element={ <FourOhFour/>} />
              </Routes>

            </Suspense>

          </Container>
        </Router>
      </>

    );
  }
}

export default App;
