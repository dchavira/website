import React from 'react';
import './contact.css'
class Contact extends React.Component {
    nameValue="";
    messageValue=""
    emailValue=""
    constructor(props) {
        // ...
        super(props)
        this.changeNameText = this.changeNameText.bind(this);
        this.changeMessageText = this.changeMessageText.bind(this);
        this.changeEmailText = this.changeEmailText.bind(this);
      }
    changeNameText(event){
        this.setState(
            {nameValue : event.target.value}
        )
    }
    changeEmailText(event){
        this.setState(
            {emailValue : event.target.value}
        )
    }
    changeMessageText(event){
        this.setState(
            {messageValue : event.target.value}
        )
    }
    top={
        marginTop:"45vh"
    }
    link={
        color:"blue"

    }
    render() {

        return (
            <div>
                
                <h1 className='contactHead'>Contact </h1>
                <p style={this.top}>Email: <a href="" style={this.link}>damianchavira@gmail.com</a></p>
                <p>Phone: 520-223-7619</p>
                <p><a href="/linkedIn" style={this.link}>LinkedIn</a></p>
                <p><a href="/git" style={this.link}>Git</a></p>
            </div>
        );


    }
}
export default Contact;