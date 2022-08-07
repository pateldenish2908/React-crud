import "../index.css"

const User = ({ user, onDelete, onEdit }) => {
    return (
        <tbody>
            <tr>
                <td><img src={user.image} alt="Avatar" className="avatar"/></td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate}</td>
                <td>
                    <a href='javascript:void(0)' onClick={() => onDelete(user.id)} >delete</a> &nbsp;
                    <a href='javascript:void(0)' onClick={() => onEdit(user.id)}>edit</a>
                </td>
            </tr>
        </tbody>
    )
}

export default User
