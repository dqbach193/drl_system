import { Link } from "react-router-dom"

const DRLDetails = ({diemRenLuyen}) => {
    return ( 
        
        <tr>
            <td>{diemRenLuyen.mssv}</td>
            <td>{diemRenLuyen.hoTen}</td>
            <td>{diemRenLuyen.drl}</td>
            <td><Link to={`/drl/${diemRenLuyen._id}`}>Xem</Link></td>
        </tr>
        
     );
}
 
export default DRLDetails;