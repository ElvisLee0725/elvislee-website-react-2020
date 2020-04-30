import React from 'react';
import isEmail from 'validator/lib/isEmail';
import sanitizeHTML from 'sanitize-html';
import Footer from './footer';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.removeSuccessMsg = this.removeSuccessMsg.bind(this);
        this.state = {
            email: '',
            message: '',
            errors: [],
            successMsg: ''
        };
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.validate();
    }

    validate() {
        let { email, message } = this.state;
        email = email.trim().toLowerCase();
        message = sanitizeHTML(message.trim(), { allowedTags: [], allowedAttributes: {} });

        let errorList = [];

        if(email === '') {
            errorList.push('Email field cannot be empty.');
        }

        if(!isEmail(email)) {
            errorList.push('Please enter a valid email address.');
        }

        if(message === '') {
            errorList.push('Please enter some messages');
        }

        if(errorList.length > 0) {
            this.setState({
                errors: errorList
            });
        }
        else {
            const data = {
                email,
                message
            }

            fetch('//localhost:8080/api/formSend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            this.setState({
                errors: [],
                successMsg: 'Your message is sent. Thank you!'
            }, this.removeSuccessMsg);

            
        }
    }

    removeSuccessMsg() {
        setTimeout(() => {
            this.setState({
                successMsg: ''
            });
        }, 3000);
    }

    clearForm() {
        this.setState({
            email: '',
            message: '',
            errors: [],
            successMsg: ''
        });
    }

    render() {
        const { errors, successMsg } = this.state;

        return (
            <section id="contact" className="pt-5 pb-5 text-center contact-bg">
                <div className="container">
                    <h2>Contact</h2>
                    <div className="row">
                        <div className="col-10 offset-1 col-sm-6 offset-sm-3">
                            <form className="pt-4 pb-4" onSubmit={this.handleSubmit}>
                                { successMsg && <div className="alert alert-success small">{ successMsg }</div> }
                                { errors && errors.map((err, index) => <div key={index} className="alert alert-danger small">{err}</div>  )}
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="name@example.com" />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control" name="message" value={this.state.message} onChange={this.handleChange} rows="10" placeholder="Your message..."></textarea>
                                </div>
                                <button type="button" className="btn btn-outline-theme-red btn-sm" onClick={this.clearForm}>Clear</button>
                                <button type="submit" className="btn btn-outline-theme-red btn-sm">Submit</button>
                            </form>

                            <div className="contact-icons pb-4">
                                <a href="//twitter.com/elvislee0725" target="_blank"><i className="fa fa-twitter"></i></a>
                                <a href="//www.facebook.com/elvislee0725" target="_blank"><i className="fa fa-facebook-square"></i></a>
                                <a href="//github.com/ElvisLee0725" target="_blank"><i className="fa fa-github"></i></a>
                                <a href="//www.linkedin.com/in/elvislee" target="_blank"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </section>
        );
    }
}

export default Contact;