import React, { Component } from 'react'

class Search extends Component {
    state= {
        text: ''
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
        this.props.searchUsers(this.state.text)
        this.setState({text:''})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" value={this.state.text} placeholder="Search Users..." onChange={this.onChange} />
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
