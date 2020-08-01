import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
//import logo from './logo.svg';
import './styles/App.css';

import Nav from './components/Nav';
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
