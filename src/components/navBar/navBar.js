import React from 'react';
import './navBar.css';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
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
                link: "/about/",
                text: "About"
            },
            {
                link: "/projects/",
                text: "Projects"
            },

            {
                link: "/contact/",
                text: "Contact"
            }
        ]
        return (

            <nav>
                <img src="./img/Logo Transparent.png" alt="Logo"></img>
                <button onClick={this.Toggle}>
                    <FaAlignJustify />
                </button>
                <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                    {
                        li.map((objLink, i) => {
                            return (<li key={i}><a href={objLink.link}>{objLink.text}</a></li>)
                        })
                    }

                </ul>
                
            </nav>);


    }
}
export default NavigationBar;
