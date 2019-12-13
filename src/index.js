import React from 'react';
import ReactDOM from 'react-dom';
//import {  Route, Link, BrowserRouter as Router  } from 'react-router-dom';
import './index.css';
//
import NavigationBar from './components/navBar/navBar';
  class App extends React.Component {

    
    render() {
      return (
        <div>
          <NavigationBar/>
          <main>
              
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
  