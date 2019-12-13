import React from 'react';
import './navBar.css';
import About from '../About/about'
import Projects from '../Projects/projects';
import Contact from '../Contact/contact';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import Home from '../home/home';
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
                link: "/home",
                text: "Home"
            },
            {
                link: "/about",
                text: "About"
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
        return (
            <Router>
            <nav>
                <Link to="/"><img src="./img/Logo Transparent.png" alt="Logo" ></img></Link>
                <button onClick={this.Toggle}>
                    <FaAlignJustify />
                </button>
                <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                    {
                        li.map((objLink, i) => {
                            return (<li key={i}><Link to={objLink.link}>{objLink.text}</Link></li>)
                        })
                    }

                </ul>
                
            </nav>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
            
            </Router>
            
            );


    }
}
export default NavigationBar;
