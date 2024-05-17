import { useEffect, useState } from "react";
import { useDRLContext } from "../hooks/useDRLContext";
import { Link } from "react-router-dom";
import {useAuthContext} from "../hooks/useAuthContext"

//components
import DRLDetails from "../components/DRLDetails";
import DRLTable from "../components/DRLTable";
import UsersDetails from "../components/UsersDetails"
import Chart from "../components/Chart";

const Home = () => {

    const {allDRL, dispatch} = useDRLContext();
    const [users, setUsers] = useState(null);
    const {user} = useAuthContext();
    const [selectedSemester, setSelectedSemester] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMajor, setSelectedMajor] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [showFirstSelect, setShowFirstSelect] = useState(true);

    const classes = ["K64-CA-CLC1",
                    "K64-CA-CLC2",
                    "K65-CA-CLC1"]

    const majorMap = {
        '01': 'Công nghệ thông tin',
        '02': 'Kỹ thuật máy tính',
        '03': 'Vật lý kỹ thuật',
        '04': 'Cơ kỹ thuật',
        '05': 'Công nghệ kỹ thuật xây dựng',
        '06': 'Công nghệ kỹ thuật cơ điện tử',
        '07': 'Công nghệ Hàng không vũ trụ',
        '08': 'Khoa học máy tính',
        '09': 'Công nghệ kỹ thuật điện tử - viễn thông',
        '10': 'Công nghệ nông nghiệp',
        '11': 'Kỹ thuật điều khiển và tự động hóa',
        '12': 'Trí tuệ nhân tạo',
        '13': 'Kỹ thuật năng lượng',
        '14': 'Hệ thống thông tin',
        '15': 'Mạng máy tính và truyền thông dữ liệu',
        '16': 'CÔNG NGHỆ THÔNG TIN ĐỊNH HƯỚNG THỊ TRƯỜNG NHẬT BẢN',
        '17': 'Kỹ thuật Robot',
        '18': 'Thiết kế công nghiệp và đồ họa'
    }

    const formatClassInfo = (classNumber) => {
        const classStr = classNumber.toString();
      
        // Extract parts of the class number
        const classYear = classStr.slice(0, 2);
        const majorIndex = classStr.slice(2, 4);
        const classNumbering = classStr.slice(4, 5);
      
        // Get the major name from the majorMap
        const majorName = majorMap[majorIndex] || 'Unknown Major';
      
        // Construct the formatted class information
        const formattedClassInfo = `K${classYear} ${majorName} ${classNumbering}`;
      
        return formattedClassInfo;
      };

    useEffect(() => { if(user.role ==='user'){
        const fetchDRL = async () => {
          const response = await fetch('/drl',{
            headers:{
                'Authorization': `Bearer ${user.token}`
              }
          })
          const json = await response.json()
    
          if (response.ok) {
            dispatch({type: 'SET_ALL_DRL', payload: json})
          }
        }
    
        if(user){
            fetchDRL()
          }
      }}, [dispatch, user])

    useEffect(() => { if(user.role ==='covan'){
        const fetchDRL = async () => {
          const response = await fetch('/drl/class',{
            headers:{
                'Authorization': `Bearer ${user.token}`
              }
          })
          const json = await response.json()
    
          if (response.ok) {
            dispatch({type: 'SET_ALL_DRL', payload: json})
          }
        }
    
        if(user){
            fetchDRL()
          }
      }}, [dispatch, user])
    
    useEffect(() => {
    const fetchUsers = async () => {
        const response = await fetch('/api/user/admin')
        const json = await response.json()

        if (response.ok) {
        setUsers(json)
        }
    }

    fetchUsers()

    const fetchDRL = async () => {
        const response = await fetch('/drl/all')
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: 'SET_ALL_DRL', payload: json})
        }
      }
  
      if(user && user.role == 'admin'){
          fetchDRL()
        }
    }, [dispatch, user])

    const toggleSelect = () => {
        setShowFirstSelect(!showFirstSelect);
        if (showFirstSelect) {
            setSelectedMajor("");
        } else {
            setSelectedDepartment("");
        }
    };
    
    if(user.role==='admin'){
        
        return(
            <div>
                <h1>Admin page</h1>
                <div className="home">
                    <div className="users">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                            {users && users.map(user => (
                            <UsersDetails user={user} key={user._id} />
                            ))}
                            {allDRL && <Chart {...allDRL} selectedSemester={selectedSemester} selectedYear={selectedYear} selectedMajor={selectedMajor} selectedDepartment={selectedDepartment}/>}
                            {user.role === 'admin' ? <Link to='/create'><button className="addDRL">Thêm điểm rèn luyện</button></Link> : <div></div> }
                        </tbody>
                        <div className="admin-selection">
                            <button onClick={toggleSelect}>
                                {showFirstSelect ? 'Chọn theo Khoa' : 'Chọn theo Ngành'}
                            </button>
                            <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
                                <option value="">Chọn kỳ học</option>
                                <option value="2024-01">Kỳ 1 năm 2023-2024</option>
                                <option value="2024-02">Kỳ 2 năm 2023-2024</option>
                            </select>
                            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                <option value="">Chọn khoá</option>
                                <option value="64">K64</option>
                                <option value="65">K65</option>
                            </select>

                            {showFirstSelect ?(<select id="majorSelect" value={selectedMajor} onChange={(e) => setSelectedMajor(e.target.value)}>
                                <option value="">Chọn ngành</option>
                                <option value="01">Công nghệ thông tin</option>
                                <option value="02">Kỹ thuật máy tính</option>
                                <option value="03">Vật lý kỹ thuật</option>
                                <option value="04">Cơ kỹ thuật</option>
                                <option value="05">Công nghệ kỹ thuật xây dựng</option>
                                <option value="06">Công nghệ kỹ thuật cơ điện tử</option>
                                <option value="07">Công nghệ Hàng không vũ trụ</option>
                                <option value="08">Khoa học máy tính</option>
                                <option value="09">Công nghệ kỹ thuật điện tử - viễn thông</option>
                                <option value="10">Công nghệ nông nghiệp</option>
                                <option value="11">Kỹ thuật điều khiển và tự động hóa</option>
                                <option value="12">Trí tuệ nhân tạo</option>
                                <option value="13">Kỹ thuật năng lượng</option>
                                <option value="14">Hệ thống thông tin</option>
                                <option value="15">Mạng máy tính và truyền thông dữ liệu</option>
                                <option value="16">CÔNG NGHỆ THÔNG TIN ĐỊNH HƯỚNG THỊ TRƯỜNG NHẬT BẢN</option>
                                <option value="17">Kỹ thuật Robot</option>
                                <option value="18">Thiết kế công nghiệp và đồ họa</option>
                            </select>):
                            (<select id="departmentSelect" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)} >
                                <option value="">Chọn khoa</option>
                                <option value="1">Viện trí tuệ nhân tạo</option>
                                <option value="2">Khoa công nghệ thông tin</option>
                                <option value="3">Khoa điện tử viễn thông</option>
                                <option value="4">Khoa cơ học kỹ thuật và tự động hoá</option>
                                <option value="5">Khoa vật lý kỹ thuật và công nghệ nano</option>
                                <option value="6">Viện công nghệ Hàng không Vũ trụ</option>
                                <option value="7">Khoa công nghệ nông nghiệp</option>
                                <option value="8">Khoa công nghệ xây dựng - giao thông</option>
                            </select>)}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
    if(user.role === 'covan'){
        return (
            <div>
                <h1>Trang Cố vấn lớp {formatClassInfo(user.userClass)}</h1>
                <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
                    <option value="">Chọn kỳ học</option>
                    <option value="2024-01">Kỳ 1 năm 2023-2024</option>
                    <option value="2024-02">Kỳ 2 năm 2023-2024</option>
                </select>
                <tbody>
                        <tr>
                            <th>MSSV</th>
                            <th>Họ Tên</th>
                            <th>ĐRL</th>
                        </tr>
                        {allDRL && allDRL.map(diemRenLuyen =>(
                            <DRLDetails key={diemRenLuyen._id} diemRenLuyen={diemRenLuyen} selectedSemester={selectedSemester}/>
                        ))}
                </tbody>
                {allDRL && <Chart {...allDRL} selectedSemester={selectedSemester}/>}
            </div>
        )
    }
    if(user.role === 'user'){
        return(
            <div>
                <select value={selectedSemester} onChange={(e) => {
                    setSelectedSemester(e.target.value)
                    }}>
                    <option value="">Chọn kỳ học</option>
                    <option value="2024-01">Kỳ 1 năm 2023-2024</option>
                    <option value="2024-02">Kỳ 2 năm 2023-2024</option>
                </select>
                    {allDRL && <DRLTable allDRL={allDRL} selectedSemester={selectedSemester}/>}
            </div>
        );
    }
    return ( 
        <div className="home">
            <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
                    <option value="">Select Semester</option>
                    <option value="2024-01">2024 Kỳ 01</option>
                    <option value="2024-02">2024 Kỳ 02</option>
                </select>
            <div className="drl">
                <table id="drl-table">
                    <tbody>
                        <tr>
                            <th>MSSV</th>
                            <th>Họ Tên</th>
                            <th>ĐRL</th>
                        </tr>
                        {allDRL && allDRL.map(diemRenLuyen =>(
                            <DRLDetails key={diemRenLuyen._id} diemRenLuyen={diemRenLuyen} selectedSemester={selectedSemester}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default Home;