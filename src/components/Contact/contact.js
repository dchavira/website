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
    render() {

        return (
            <div>
                
                <h1 className='contactHead'>Contact </h1>
                <form>
                    <br/>
                    Name
                    <input
                        type='text'
                        name='name'
                        placeholder="Your Name"
                        //value={this.nameValue}
                        onChange ={this.changeNameText}
                    />
                    <br/>
                    Email
                    <input
                        type='text'
                        name='email'
                        placeholder="something@mail.com"
                        //value={this.messageValue}
                        onChange={this.changeEmailText}
                    />
                    <br/>
                    Enter message:
                    <input
                        type='text'
                        name='message'
                        className="messageBox"
                        placeholder="Say something!"
                        //value={this.messageValue}
                        onChange={this.changeMessageText}
                        
                    /><br/>
                    <button className="submit" onClick="">Send Message</button>
                    <br/>
                </form>
            </div>
        );


    }
}
export default Contact;