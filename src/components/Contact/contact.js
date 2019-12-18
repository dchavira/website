import React from 'react';
import './contact.css'
class Contact extends React.Component {
    nameValue="";
    messageValue=""
    constructor(props) {
        // ...
        super(props)
        this.changeNameText = this.changeNameText.bind(this);
        this.changeMessageText = this.changeMessageText.bind(this);
      }
    changeNameText(event){
        this.setState(
            {nameValue : event.target.value}
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
                    <input
                        type='text'
                        name='name'
                        placeholder="Your Name"
                        //value={this.nameValue}
                        onChange ={this.changeNameText}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder="Say something!"
                        //value={this.messageValue}
                        onChange={this.changeMessageText}
                    />
                </form>
            </div>
        );


    }
}
export default Contact;