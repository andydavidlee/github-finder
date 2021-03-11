import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { FaCheckSquare, FaTimesCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

class Singleuser extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }
    static propTypes={
        loading: PropTypes.bool.isRequired,
        userdetails: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }
    render() {
        const { name, avatar_url, location, bio, hireable, html_url } = this.props.userdetails;
        const { loading } = this.props.loading;
        if(loading) {
            <Spinner />
        } else {
        return (
            <Fragment> 
                <Link to="/" className="btn btn-light">Back to Search</Link>
                Hireable: {' '}
                {hireable?<FaCheckSquare className="text-success" />:<FaTimesCircle className="text-primary" />}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="" className="rounded-circle" style={{ width: '150px' }} />
                        <h1>{ name }</h1>
                        <p>Location:{ location }</p>
                    </div>
                    <div>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{ bio }</p>
                            </Fragment>
                        )}
                        <a href={ html_url } className="btn btn-dark">Visit GitHub Profile</a>
                    </div>
                </div>
            </Fragment>
        )
        }
    }
}

export default Singleuser
