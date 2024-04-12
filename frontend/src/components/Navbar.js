import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Hệ thống điểm rèn luyện</h1>
                </Link>
                <nav>
                    <div>
                        <Link to='/login'>Đăng nhập</Link>
                        <Link to='/signup'>Đăng ký</Link>
                    </div>
                </nav>
            </div>
        </header>
     );
}
 
export default Navbar;