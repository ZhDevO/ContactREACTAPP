import axios from "axios";
import React, { Component } from "react";
import { Consumer } from "../Context";
import TextInputGroup from "../Helpers/TextInputGroup";
class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChangeInput = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    submit = async (dispatch, size, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        if(name == "") {
            this.setState({
                errors: {name: "The name is required !!!"}
            })
            return;
        }


        if(email == "") {
            this.setState({
                errors: {email: "The email is required !!!"}
            })
            return;
        }

        if(phone == "") {
            this.setState({
                errors: {phone: "The phone is required !!!"}
            })
            return;
        }

        const newContact = {
            // id: size + 1,
            name,
            email,
            phone
        }
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/users", newContact)
                
            dispatch({
                type: 'ADD_CONTACT',
                payload: res.data
            })
        }catch(e) {
            console.log(e)
        }
        
        // initialize input
            this.setState({
                name: '',
                email: '',
                phone: '',
                errors: {}
            })
            this.props.history.push('/');
    }

    render() {

        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <div className="container-fluid">
                            {/* (.form-group>label+input.form-control)*3+button.btn.btn-success.btn-block */}
                            <form onSubmit={this.submit.bind(this,dispatch, value.Contacts.length)}>
                            <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Add Contact</h4>
                                <div className="card-text">
                                    <TextInputGroup 
                                        label="Name" 
                                        type="text"
                                        name="name" 
                                        defaultValue={ name }
                                        onChange={this.onChangeInput}
                                        error={errors.name}
                                    />
                                <TextInputGroup 
                                        label="Email" 
                                        type="email"
                                        name="email" 
                                        value={ email }
                                        onChange={this.onChangeInput}
                                        error={errors.email}
                                    />
                                <TextInputGroup 
                                        label="Phone" 
                                        type="text"
                                        name="phone" 
                                        value={ phone }
                                        onChange={this.onChangeInput}
                                        error={errors.phone}
                                    />
                                <button className="btn btn-success mt-4 btn-block">
                                    Add New Contact
                                </button>
                                </div>
                            </div>
                            </div>
                            </form>
                            </div>
                        </div>
                        );
                }}
            </Consumer>
        )
    }
}
export default AddContact;
