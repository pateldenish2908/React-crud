import User from './User';
import "../index.css"

const Users = ({ users, onDelete, onEdit }) => {
    return (
        <table className='table table-secondary table-striped'>
            <thead>
                <tr>
                    <th></th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>birthDate</th>
                    <th></th>
                </tr>
            </thead>
            {users.map((user) => (<User key={user.id} user={user} onDelete={onDelete} onEdit={onEdit} />))}
        </table>
    )
}

export default Users;
