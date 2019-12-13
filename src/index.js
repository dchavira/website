import React from 'react';
import ReactDOM from 'react-dom';
//import {  Route, Link, BrowserRouter as Router  } from 'react-router-dom';
import './index.css';
//import About from './components/About/about';
import NavigationBar from './components/navBar/navBar';
import Home from './components/home/home';
  class App extends React.Component {

    
    render() {
      return (
        <div>
          <NavigationBar/>
          <main>
              <Home/>
          </main>
          </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  