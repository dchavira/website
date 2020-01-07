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
                    <iframe  title="BVR Update 1" src="https://drive.google.com/file/d/1YHt_FoZ5CP4o3LhcUAyaeWxx7Xbl9AY9/preview" allowFullScreen></iframe>
                </div>
                <p className="info">
                It's been a couple of weeks since that last video and some major work has been done. Excuse the resolution as it is only a game preview I was playing not the full build. I have added some elements to the level selection screen and made a new song for it.
                 I added a better river spline, some trees, grass, plants etc. Even a doe! 
                 Once the first level is loaded, you can see that once a player puts all the items into the balance area, the timer starts. 
                 Each level will have a different amount of time but the gist of it stays the same. 
                 All sound effects including the level completed sound effect were made by my beautiful voice. 
                Once a level is complete the main menu pops up to go to the next level or quit. Time to make more levels!
                </p>
                <div id="iframeContainer">  
                    <iframe  title="BVR Update 2" src="https://drive.google.com/file/d/1CkdtsnQ787t6kRzdA8egCU03YQMLv1WK/preview" allowFullScreen></iframe>
                </div>
            </div>
        )
    };
}
export default BalanceVr;