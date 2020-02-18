import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrapNav.css'
import { Navbar, Nav} from 'react-bootstrap';
class BootNavbar extends React.Component {
    style={
          color:"#000"  
    }
    buttons={
        marginTop:"10%"
    }
    state = {
        notHome:false,
        scrolled: false,
        prevPath:""
    }
    toggleScroll =(param) =>{
        this.setState({ scrolled: param})
        
    }
    toggleNotHome =(param) =>{
        this.setState({ notHome: param})
    }
    
    componentDidMount() {
        
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        const currentLoc = window.location.pathname;
        if (currentLoc!=="/"){
            
            this.toggleNotHome(true)
        }
        if (currentLoc==="/"||currentLoc==="/home"){
            
            this.toggleNotHome(false)
        }
        
    }
    handleScroll = event => {
        // if user scrolls down, add black background color to nav
        if(!this.state.scrolled){
            this.toggleScroll(true)
        }
        //if scroll is at top of page, remove black style
        if(window.pageYOffset===0 && this.state.scrolled){
            this.toggleScroll(false)
        }
    }
    componentDidUpdate(){
        console.log(this.state.scrolled)
    }
    img={
        width:'4vw',
        height:'auto'
    }
    render() {
        
        return (
            <div>
                <Navbar expand="lg" fixed="top" className={(this.state.scrolled||this.state.notHome ? "scrolled":"navbar")}>
                    <Navbar.Brand href="/home"><img src="./img/Logo Transparent.png" alt="logo" style={this.img}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="buttons" onClick={this.toggleScroll} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" >
                            <Nav.Link href="home" className="navBarLink">Home</Nav.Link>
                            <Nav.Link href="about" className="navBarLink">Resume</Nav.Link>
                            <Nav.Link href="projects" className="navBarLink">Projects</Nav.Link>
                            <Nav.Link href="contact" className="navBarLink">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    };
}
export default BootNavbar;