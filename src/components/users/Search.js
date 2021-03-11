import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    static propTypes={
        clearUsers: PropTypes.func.isRequired,
        searchUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }
    state = {
        text: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
            e.preventDefault();
            // console.log(this.state.text)
            if(this.state.text===''){
                this.props.setAlert('Please enter something','secondary')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' })
        }
    }
    render() {
        const{ showClear, clearUsers} = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form">
                    <input type="text" name="text" value={this.state.text} placeholder="Search Users..." onChange={this.handleChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && (
                    <button className="btn btn-light" onClick={clearUsers}>Clear</button>
                )}
            </div>
        )
    }
}

export default Search
