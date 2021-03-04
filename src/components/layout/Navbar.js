import React from 'react'
// import { FaGithubSquare } from 'react-icons/fa';
import PropTypes from 'prop-types'
import { FaGithubSquare } from 'react-icons/fa'

const Navbar = ({icon, title}) => {
        return (
            <nav className='bg-primary navbar'>
                <h1>{icon}{title}</h1>
            </nav>
        )
    }

    Navbar.defaultProps = {
        title: 'Navbar',
        icon: <FaGithubSquare />
    }
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
    }

export default Navbar
