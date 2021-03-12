import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithubSquare } from "react-icons/fa";
import PropTypes from 'prop-types'

const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar bg-primary">
            <h1 className="text-white">{icon}{title}</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Navbar',
    icon: <FaGithubSquare className='me-3'/>
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
}

export default Navbar
