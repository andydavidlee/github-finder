import React from 'react';
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const Users =({users, loading}) => {
    if(loading) {
        return <Spinner />
    } else {
         // const { users } = this.props;
         return (
            <div style={userStyle}>
                {users.map(user => (
                    <>
                    <UserItem key={user.id} user={user}/>
                    {/* <div>{user.id}</div> */}
                    {/* <img src={user.avatar_url} alt="avatar" style={{width: '100px'}}/> */}
                    </>
                ))}
            </div>
        )
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users