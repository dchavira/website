import React from 'react';
import './projects.css'
class Art extends React.Component{
    render(){
        return(
            <div>
                <h1 className="projectsHead">3D Art</h1>
                
                <img src="img/balanceVR.jpeg" className="art" alt="BalanceVR Screenshot" download></img>
                <h2>Unreal Engine 4</h2>
                <p className="infoDetail">
                This is a screenshot from my game BalanceVR. Using assets from the Open World Collection by Epic Games, I created this environment for the level selection screen. 
                In this environment, there is only one source of light, the sun, so I was able to run with dynamic lighting in UE4 without having significant performance loss.
                 Being the first level a player will see, I tried going with warm, earthy colors as seen by the maroon colors in the morning sky and shadows.
                </p>
                <h2>Blender</h2>
                <img src="img/album finished.jpg" className="artSecondary" alt="Because the Internet Custom" download></img>
                <p  className="infoDetail"> During high school, I took some classes at the Art Institute of Tucson to learn more about Photoshop and color theory.
                    Our final project was to create a new album cover for one of your favorite songs. 
                    At the time my favorite was "I. Flight of the Navigator" by Childish Gambino. 
                    In Blender, I create a single low poly tree and duplicated it around the scene.
                    Next was the Mountain which began as a plane but I modified the vertices to shape it as a mountain.
                    Added some coloring and boom it was done. 
                    The landscape was also a plane where I adjusted the vertices except once I did that, I lowered the faces to create the river and colored them differently. 
                    The clouds and moon were sculpted within the Blender sculptor and I lowered the poly count. Once I had my scene done I exported it as a .png and in Photoshop 
                    I created the gradient and stars with a simple brush I created. The reason I remade the album cover this way was because the song made me picture flying towards the sunset and passing different landscapes. 
                    Of course, since I could only fit one environment into the picture, I picked a mountain scene with earthy colors to give it some warmth and stable coloring.</p>
            </div>
        );
    }
};
export default Art;