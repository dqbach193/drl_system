const DRLDetails = ({diemRenLuyen}) => {
    return ( 
        <tr>
            <td>{diemRenLuyen.mssv}</td>
            <td>{diemRenLuyen.hoTen}</td>
            <td>{diemRenLuyen.drl}</td>
        </tr>
     );
}
 
export default DRLDetails;