import React from 'react';
import './projects.css'
class Art extends React.Component{
    render(){
        return(
            <div>
                <h1 className="projectsHead">3D Art</h1>
                
                <img src="img/balanceVR.jpeg" className="art" alt="BalanceVR Screenshot"></img>
                <h2>Unreal Engine 4</h2>
                <p className="infoDetail">
                This is a screenshot from my game BalanceVR. Using assets from the Open World Collection by Epic Games, I created this environment for the level selection screen. 
                In this environment, there is only one source of light, the sun, so I was able to run with dynamic lighting in UE4 without having significant performance loss.
                 Being the first level a player will see, I tried going with warm, earthy colors as seen by the maroon colors in the morning sky and shadows.
                </p>
                <h2>Blender</h2>
            </div>
        );
    }
};
export default Art;