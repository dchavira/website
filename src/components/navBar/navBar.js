import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { FaAlignJustify } from 'react-icons/fa';
class NavigationBar extends React.Component {
    state = {
        toggle: false,
        scrolled: false,
        onHome:true
    }
    
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    toggleScroll =() =>{
        this.setState({ scrolled: !this.state.scrolled})
        
    }
    toggleOnHome=()=>{
        this.setState({onHome: !this.state.onHome})
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        const vJSLoc= window.location.pathname;
        if(vJSLoc!=="/" && this.state.onHome){
            this.toggleOnHome()
        }
        //if the page is not home but going home, this is false turning off black style;
        if(vJSLoc==="/" && !this.state.onHome){
            this.toggleOnHome()  
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = event => {
        // if user scrolls down, add black background color to nav
        if(!this.state.scrolled){
            this.toggleScroll()
        }
        //if scroll is at top of page, remove black style
        if(window.pageYOffset===0 && this.state.scrolled){
            this.toggleScroll()
        }
    }
    
    componentDidUpdate(){
            
            const currentLoc = this.props.location.pathname;
            
            //if the page is home but leaving it, this is now true and turns on black style
            if(currentLoc!=="/" && this.state.onHome){
                this.toggleOnHome()
            }
            //if the page is not home but going home, this is false turning off black style;
            if(currentLoc==="/" && !this.state.onHome){
                this.toggleOnHome()  
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

        return (

            <nav  onScroll={this.handleScroll} className={this.state.scrolled||!this.state.onHome ? "scrolled":null}>
                <Link to="/"><img className="logo" src="./img/Logo Transparent.png" alt="Logo" ></img></Link>
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
export default withRouter(NavigationBar);
