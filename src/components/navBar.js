import React from 'react';
import './navBar.css';
class NavigationBar extends React.Component{
    render(){
        return(
            <nav>
                <img src="Logo Transparent.png" alt="Logo"></img>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li> 
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                
            </nav>
        );
    }
}
export default NavigationBar;