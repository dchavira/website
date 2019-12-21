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
            </h1>
        );
            
        
    }
}
export default NotFound;