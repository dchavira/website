import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './components/navBar';
  class Home extends React.Component {
    render() {
      return (
        <NavigationBar />
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );
  