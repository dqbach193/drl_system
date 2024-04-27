import { useEffect, useState } from "react"
import {useAuthContext} from "../hooks/useAuthContext"

// components
import UsersDetails from "../components/UsersDetails"

const Admin = () => {
  const [users, setUsers] = useState(null)
  const {user} = useAuthContext();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/user/admin')
      const json = await response.json()

      if (response.ok) {
        setUsers(json)
      }
    }

    fetchUsers()
  }, [])
    return (
        <div className="home">
        <div className="users">
            {users && users.map(user => (
            <UsersDetails user={user} key={user._id} />
            ))}
        </div>
        </div>
    )
}

export default Admin