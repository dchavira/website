import React from 'react';
class NotFound extends React.Component {
    hStyle = {
        color: 'black',
        zIndex:"-1",
        marginTop:"25vh"
    };
    
    pStyle = {
        position: "relative",
        marginTop:"45vh"
    }
    render() {

        return (
            <div>
                <h1 style={this.hStyle}>
                    Sorry, we couldn't find that page :( <br />
                </h1>
                <p style={this.pStyle}>The page you are trying to look at either hasn't been made yet or is not a part of this website</p>
                <a href="/home" >Go Home</a>
            </div>
        );


    }
}
export default NotFound;