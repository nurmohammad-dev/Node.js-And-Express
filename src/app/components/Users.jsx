import React, { use } from 'react';

const Users = ({ usersPromise }) => {
    const users = use(usersPromise());
    return (
        <div>
            <h2>user in the components: {users.length}</h2>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>  
                        <h4>{user.email}</h4>  
                    </div>
                ))
            }
        </div>
    );
};

export default Users;