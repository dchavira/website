import React from 'react';
import './home.css';
import HomeImg from './homeImg';
class Home extends React.Component{
    
    render(){
        const landMessage="My name is Damian and I like to do lots of things.";
        const secondMessage="Some things are Web Dev, Mobile Apps, Music, and 3D Art just to name a few. Check out the other tabs to see more of my work!";
        return(
            <div>
                <HomeImg />
                <h1 className='Message'>
                    Welcome!
                </h1>
                <p>
                    <br></br>
                    {landMessage}
                    <br></br>
                    {secondMessage}
                </p>
            </div>
        );
            
        
    }
}
export default Home;