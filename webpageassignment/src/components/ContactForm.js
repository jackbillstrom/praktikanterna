import React, { Component } from 'react';

class Contactform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            message: ''
        };

    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Message sent!`);
    }


    render() {
        const { email, name, message } = this.state
        return (
            <div id="contact-us">
                <div className="card">

                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Contact us</strong>
                    </h5>

                    <div className="card-body px-lg-5 pt-0">

                        <form onSubmit={this.handleSubmit} className="text-center">

                            <div className="md-form mt-3">
                                <label htmlFor="materialContactFormName">Name</label>
                                <input type="text" id="materialContactFormName" className="form-control" value={name} onChange={this.handleNameChange} />
                            </div>

                            <div className="md-form">
                                <label htmlFor="materialContactFormEmail">E-mail</label>
                                <input type="email" id="materialContactFormEmail" className="form-control" value={email} onChange={this.handleEmailChange} />
                            </div>

                            <div className="md-form">
                                <label htmlFor="materialContactFormMessage">Message</label>
                                <textarea id="materialContactFormMessage" className="form-control md-textarea" rows="3" value={message} onChange={this.handleMessageChange}></textarea>
                            </div>

                            <button className="btn  btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Send</button>

                        </form>

                    </div>

                </div>
            </div>
        )
    }
}

export default Contactform


