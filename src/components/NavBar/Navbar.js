import React from 'react';
import PropTypes from 'prop-types';  //impt
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const {title} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <div className="container">
            <Link className="navbar-brand" to="/">{ title }</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link active" to="/contact/add">Add Contact</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link active" to="/contact/edit/:id">Edit Contact</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link active" to="/about/:id">About</Link>
                    </li>
                </ul>
                </div>
        </nav>
    );
}

Navbar.defaultProps = {
    title: "My Title"
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


export default Navbar;
