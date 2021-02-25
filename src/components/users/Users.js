import React, { Component } from 'react';

export class Users extends Component {

    state = {
        users:[
            {
                login: "mojombo",
                id: 1,
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
            {
                login: "Gary",
                id: 2,
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
            {
                login: "Abbey",
                id: 3,
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
            {
                login: "Stuff",
                id: 4,
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
        ]
    }
    render() {
        const { users } = this.state;
        return (
            <div>
                {users.map(user => (
                    <>
                    <div>{user.login}</div>
                    <div>{user.id}</div>
                    <img src={user.avatar_url} alt="avatar" style={{width: '100px'}}/>
                    </>
                ))}
            </div>
        )
    }
}

export default Users
