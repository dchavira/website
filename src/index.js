import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './components/About/about'
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/footer';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from './components/home/home'
import NavigationBar from './components/navBar/navBar';
import BalanceVr from './components/Projects/balanceVr';
import Art from './components/Projects/art';

  class App extends React.Component {
    state = {
      toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    fStyle={
      position:"relative"
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
                <Route path="/balanceVr">
                    <BalanceVr/>
                </Route>
                <Route path="/art">
                    <Art/>
                </Route>
                <Route path='/linkedIn' component={() => window.location = ' https://www.linkedin.com/in/damian-chavira-a45886141'}/>
              <Route path='/git' component={() => window.location = 'https://www.github.com/dchavira'}/>
              <Route path='/personal' component={() => window.location = 'https://github.com/dchavira/website'}/>
                {// eslint-disable-next-line
              }<Route component={NotFound}/>
            </Switch>
            <Footer />
        </Router>
      );
      
    }
    
    
  }
  
  // ========================================
  
  ReactDOM.render(
    
    <App />,
    document.getElementById('root')
  );
  