import React from 'react';
import Nav from "./components/Nav";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import {Container} from "./components/Grid"
import './App.css';

const navStyle = {
	color: 'cornflowerblue',
	listStyle: 'none'
};

function App() {
  return (
    <Router>
      <div className="App">
        <Nav className="App-header" style={navStyle}/>
        <Container>
          <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={Home} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
