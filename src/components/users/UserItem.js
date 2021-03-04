import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user:{ login,avatar_url, html_url }}) => {
    // state =   {
    //     login: "mojombo",
    //     id: 1,
    //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo",
    //   }

        return (
            <div className="card text-center">
                <h2>{login}</h2>
                <img src={avatar_url} alt="avatar" className="round-img" style={{width: '60px'}}/>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        )
}
UserItem.propTypes={
    user: PropTypes.object.isRequired,
}
export default UserItem
