import React from 'react';
import './home.css';
class HomeImg extends React.Component{
    nameStyle={
        zIndex:"-1"
    }
    imgStyle={
        zIndex:"-2"
    }
    render(){
        
        return(
            <div>
            <h1 style ={this.nameStyle} id="name">Damian Chavira</h1>
            <img className='concert' src='./img/concert4k dark.jpg' alt='Solo Concert' style={this.imgStyle}></img>
            </div>
        );
            
        
    }
}
export default HomeImg;