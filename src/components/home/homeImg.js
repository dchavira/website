import React from 'react';
import './home.css';
class HomeImg extends React.Component{
    nameStyle={
        position:"absolute",
        marginTop:'12%',
        zIndex:"1"
    }
    
    render(){
        
        return(
            <div>
                <h1 style ={this.nameStyle} id="name">Damian Chavira</h1>
                <img className='concert' src='./img/concert4k dark.jpg' alt='Solo Concert'></img>
            </div>
        );
            
        
    }
}
export default HomeImg;