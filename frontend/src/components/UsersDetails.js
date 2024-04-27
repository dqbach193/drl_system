import { Link } from "react-router-dom"

const UsersDetails = ({user}) => {
    const handleDelete = async () =>{
        alert('Delete : ' + user.email)
    }
    return ( 
        <tr>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td> <button>Edit</button> </td>
            <td> <button onClick={handleDelete}>Delete</button> </td>
        </tr>
     );
}
 
export default UsersDetails;