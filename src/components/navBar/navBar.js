import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
class NavigationBar extends React.Component {
    state = {
        toggle: false,
        scrolled: false
    }
    constructor(props){
        super(props);
        this.handleScroll= this.handleScroll.bind(this);
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    toggleScroll =() =>{
        this.setState({ scrolled: !this.state.scrolled});
        
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = event => {
        // do something at end of scroll
        let element=event.target;
        
        if(!this.state.scrolled){
            this.toggleScroll()
        }if(window.pageYOffset===0 && this.state.scrolled){
            this.toggleScroll()
            console.log(window.pageYOffset)
            
            
        }
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



        return (

            <nav  onScroll={this.handleScroll} className={this.state.scrolled ? "scrolled":null}>
                {//<li className={text === 'foo' ? styles.class1 : styles.class2 } .../>
                }<Link to="/home"><img className="logo" src="./img/Logo Transparent.png" alt="Logo" ></img></Link>
                <button onClick={this.Toggle}>
                    <FaAlignJustify />
                </button>
                <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                    {
                        li.map((objLink, i) => {
                            return (<li key={i} ><Link to={objLink.link} style={{ color: currentLoc === "/" ? "white" : "black" }}>{objLink.text}</Link></li>)
                        })
                    }

                </ul>


            </nav>
        );


    }
}
export default NavigationBar;
