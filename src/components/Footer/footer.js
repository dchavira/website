import React from 'react';
import "./footer.css"
import { FaGithub,FaLinkedin,FaEnvelope } from 'react-icons/fa';
class Footer extends React.Component{
    
    render(){
        
        return(
            
            <footer style={this.fStyle}>
                <ul className="icons">
                    <li><a href="/git" target="_blank"><FaGithub /></a></li>
                    <li><a href="/linkedIn" target="_blank"><FaLinkedin /></a></li>
                    <li><a href="/contact" target="_blank"><FaEnvelope /></a></li>
                </ul>
                    
                
            </footer>
        );
            
        
    }
}
export default Footer;