import React from 'react'
import '../style/ContactPage.css'
import {Prompt} from "react-router";

class ContactPage extends React.Component {

    state = {
        value: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            value: ''
        })
    };

    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    };

    render() {
        return (
            <div className='contact'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Write to us</h3>
                    <textarea value={this.state.value} onChange={this.handleChange}
                              placeholder='type a message...'/>
                    <button>Send massage</button>
                </form>
                <Prompt when={this.state.value}
                        message={"You didn't send the message. Are you sure you want to leave this page?"}/>
            </div>
        )
    }
}

export default ContactPage