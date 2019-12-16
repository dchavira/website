import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './components/About/about'
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from './components/home/home'
import NavigationBar from './components/navBar/navBar';

  class App extends React.Component {
    state = {
      toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
      
    
      return (
        <Router>
            <NavigationBar/>
            
            <Switch>
              {// eslint-disable-next-line
              }<Route exact path ="/" component={NavigationBar,Home}/>
                  
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
            
        </Router>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    
    <App />,
    document.getElementById('root')
  );
  