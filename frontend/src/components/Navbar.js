import { Link } from "react-router-dom";
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const {logout} = useLogout();
    const {user} = useAuthContext()

    const handleClick = () =>{
        logout()
    }
    return ( 
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Hệ thống điểm rèn luyện</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user &&(
                        <div>
                            <Link to='/login'>Đăng nhập</Link>
                            <Link to='/signup'>Đăng ký</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
     );
}
 
export default Navbar;