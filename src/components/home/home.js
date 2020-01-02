import React from 'react';
import './home.css';
import HomeImg from './homeImg';
class Home extends React.Component{
    
    render(){
        const welcomeMsg="My name is Damian and I like to do lots of things.";
        const intro="Some things are Web Dev, Mobile Apps, Music, and 3D Art just to name a few. Check out the other tabs to see more of my work!";
        const about='My focus has been on Web Development using frameworks such as React JS to make things like the site you\'re currently looking at.';
        const aboutMsg='I am always learning and interested in new technologies. I have experimented with various types of projects that you can see here.';
        return(
            <div>
                <HomeImg />
                <h1 className='Message'>
                    Welcome!
                </h1>
                <p>
                    <br></br>
                    {welcomeMsg}
                    <br></br>
                    {intro}
                </p>
                <h1 className='Message'>
                    About Me
                </h1>
                <p>
                    <br></br>
                    {about}
                    <br></br>
                    {aboutMsg}
                </p>
            </div>
        );
            
        
    }
}
export default Home;