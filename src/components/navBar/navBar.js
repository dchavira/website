import React from 'react';
import './navBar.css';
import {Link} from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
class NavigationBar extends React.Component {
    state = {
        toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        const li = [
            {
                link: "/",
                text: "Home"
            },
            {
                link: "/about",
                text: "Resume"
            },
            {
                link: "/projects",
                text: "Projects"
            },

            {
                link: "/contact",
                text: "Contact"
            }
        ]
        const currentLoc = window.location.pathname;
        console.log(currentLoc);
        return (
            
            <nav>
                {//<li className={text === 'foo' ? styles.class1 : styles.class2 } .../>
                }<Link to="/home"><img className="logo" src="./img/Logo Transparent.png" alt="Logo" ></img></Link>
                <button onClick={this.Toggle}>
                    <FaAlignJustify />
                </button>
                <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                    {
                        li.map((objLink, i) => {
                            return (<li key={i} ><Link to={objLink.link}>{objLink.text}</Link></li>)
                        })
                    }

                </ul>
                
            </nav>
            );


    }
}
export default NavigationBar;
