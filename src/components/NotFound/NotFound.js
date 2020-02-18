import React from 'react';
import './notFound.css'
class NotFound extends React.Component {
    hStyle = {
        color: 'black',
        position:'relative',
        textShadow:'none',
        
    };
    
    pStyle = {
        position: "relative",
        marginTop:"4vh"
    }
    aStyle={
        position:'relative',
        float:'left',
        paddingTop:"20vh",
        fontSize:'8vh'
    }
    render() {

        return (
            <div>
                <h1 style={this.hStyle} className='header'>
                    Sorry, we couldn't find that page :( <br />
                </h1>
                <p style={this.pStyle}>The page you are trying to look at either hasn't been made yet or is not a part of this website.<br/>
                Please check if the url is correctly typed.<br/>
                
                <a href="/home" style={this.aStyle}>Go Home</a></p>
                
                
            </div>
        );


    }
}
export default NotFound;