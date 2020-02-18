import React from 'react';
import "./footer.css"
import { FaGithub,FaLinkedin,FaEnvelope } from 'react-icons/fa';
class Footer extends React.Component{
    
    render(){
        
        return(
            
            <footer>
                <ul className="icons">
                    <li><a href="/git" target="_blank"><FaGithub color="#FFF"/></a></li>
                    <li><a href="/linkedIn" target="_blank"><FaLinkedin color="#FFF" /></a></li>
                    <li><a href="/contact" target="_blank"><FaEnvelope color="#FFF"/></a></li>
                </ul>
                <div id="copy">
                    &copy; Damian Chavira 2020
                </div>
                
            </footer>
        );
            
        
    }
}
export default Footer;