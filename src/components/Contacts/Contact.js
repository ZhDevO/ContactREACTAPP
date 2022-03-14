import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../Context";
import "./Contact.css";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactToggle: true,
  };

  showContact(myMessage) {
    console.log("Salam", myMessage);
    this.setState({
      showContactToggle: !this.state.showContactToggle,
    });
  }
  onDeleteClick = async (id, dispatch) => {

    try{
      const res = await axios.delete('https://jsonplaceholder.typicode.com/users/'+ id)
        
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      })
    }catch(e) {
      console.log(e)
    }

    
        
  };

  render(props) {
    const { id, name, phone, email } = this.props.data;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="container-fluid">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  {name}{" "}
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={this.showContact.bind(this, name)}
                    className="fa fa-sort-down"
                  ></i>
                  <i
                    style={{ color: "red", float: "right", cursor: "pointer" }}
                    className="fa fa-times"
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  ></i>

                  <Link to={`/contact/edit/${id}`}>
                    <i className="fa fa-pencil" style={{ color: 'orange', float: 'right', marginLeft: '8px', cursor: 'pointer' }}></i>
                  </Link>

                </h4>
                {this.state.showContactToggle ? (
                  <ul className="list-group">
                    <li className="list-group-item">{phone}</li>
                    <li className="list-group-item">{email}</li>
                  </ul>
                ) : null}
              </div>
            </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.defaultProps = {
  name: "My Name",
  phone: "0600000000",
  email: "my@email.com",
};

Contact.propTypes = {
  data: PropTypes.object.isRequired,
  // deleteContactFromChild:PropTypes.func.isRequired
};
export default Contact;
