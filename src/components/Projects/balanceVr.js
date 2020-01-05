import React from 'react';
import './projects.css';
class BalanceVr extends React.Component{
   
    render(){
        return(
            <div>
                <h1 className="projectsHead">Balance VR</h1>
                <p className="info">
                    <br />
                    Using the notorious Unreal Engine 4, this Virtual Reality physics-based puzzle game takes a player through various 
                    environments and scenes as they try to build a balanced stack! Puzzle games challenge the mind and with each level 
                    having different scenes and shapes, every player will find various solutions to these puzzles.
                     Grab each shape given to you and figure out how to stack them on the platform but be careful!
                      You have a limited time to make sure they don't fall once you placed them. 
                    If they fall, it's game over. Will you be able to balance your stack?
                </p>
                <h2>Pre-Alpha Development</h2>
                <p className="info">In this video, I had barely started level designing and implementing level selection.
                 You can see the basic shape of the terrain and the main world the player would spawn in once the game booted up. 
                 The song was made by me and was used in both levels to try to set up audio in the game. Every level will have its own music. 
                 As you can see there was still plenty of work to do as the controls would glitch out once loading into the new level and the
                  new level wasn't really a level yet. </p>
                <div id="iframeContainer">  
                    <iframe src="https://drive.google.com/file/d/1YHt_FoZ5CP4o3LhcUAyaeWxx7Xbl9AY9/preview" allowFullScreen></iframe>
                </div>
            </div>
        )
    };
}
export default BalanceVr;