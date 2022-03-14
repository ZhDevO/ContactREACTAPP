import axios from "axios";
import React, { Component } from "react";
import { Consumer } from "../Context";
import TextInputGroup from "../Helpers/TextInputGroup";
class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount(){
        const id = this.props.match.params.id;

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        this.setState({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone
        })
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

        const upContact = {
            // id: size + 1,
            name,
            email,
            phone
        }
        const id = this.props.match.params.id;

        try {
            const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, upContact)
                
            dispatch({
                type: 'UPDATE_CONTACT',
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
                                <h4 className="card-title">Edit Contact</h4>
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
                                <button className="btn btn-danger mt-4 btn-block">
                                    Edit Contact
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
export default EditContact;
