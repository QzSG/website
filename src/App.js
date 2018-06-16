import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
//import logo from './logo.svg';
import './styles/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import FourOhFour from './components/FourOhFour';
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
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={FourOhFour} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
