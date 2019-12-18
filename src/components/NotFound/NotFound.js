import React from 'react';
class NotFound extends React.Component{
    hStyle={
        color:'black',
    };
    aStyle={
        color:'blue',
    };
    render(){
        
        return(
            
            <h1 style={this.hStyle}>
                Sorry, we couldn't find that page :( <br />
                <a href="/" style={this.aStyle}>Go Home</a>
            </h1>
        );
            
        
    }
}
export default NotFound;