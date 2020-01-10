import React from 'react';
import './projects.css'
class JazzChords extends React.Component{
    render(){
        return(
            <div>
                <h1 className="projectsHead">Jazz Chords</h1>
                
                <p className="info">
                    This is a jazz education mobile app designed to help jazz improvisers know what scale(s) to use in any given chord.
                    This is made with React Native, Firebase and Expo. Due to this app being a new project there aren't any demos
                    or public information about it yet. 
                </p>
            </div>
        );
    }
};
export default JazzChords;