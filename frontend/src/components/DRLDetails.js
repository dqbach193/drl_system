const DRLDetails = ({diemRenLuyen}) => {
    return ( 
        <tr>
            <th>{diemRenLuyen.mssv}</th>
            <td>{diemRenLuyen.hoTen}</td>
            <td>{diemRenLuyen.drl}</td>
        </tr>
     );
}
 
export default DRLDetails;