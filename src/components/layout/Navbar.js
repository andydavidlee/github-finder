import React, { Component } from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import PropTypes from 'prop-types'

export class Navbar extends Component {
    static defaultProps = {
        title: 'Navbar'
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
    }
    render() {
        return (
            <nav className='bg-primary navbar'>
                <h1><FaGithubSquare />{this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar
