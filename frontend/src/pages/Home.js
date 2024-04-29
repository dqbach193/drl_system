import { useEffect, useState } from "react";
import { useDRLContext } from "../hooks/useDRLContext";
import { Link } from "react-router-dom";
import {useAuthContext} from "../hooks/useAuthContext"

//components
import DRLDetails from "../components/DRLDetails";
import DRLTable from "../components/DRLTable";
import UsersDetails from "../components/UsersDetails"

const Home = () => {

    const {allDRL, dispatch} = useDRLContext();
    const [users, setUsers] = useState(null);
    const {user} = useAuthContext();
    const [selectedSemester, setSelectedSemester] = useState('');

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
    }, [])
    
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
                        {user.role === 'admin' ? <Link to='/create'><button className="addDRL">Thêm điểm rèn luyện</button></Link> : <div></div> }
                    </tbody>
                </div>
                </div>
            </div>
            
        )
    }
    if(user.role === 'covan'){
        return (
            <div>
                <h1>Trang Cố vấn lớp {user.userClass}</h1>
                <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
                    <option value="">Select Semester</option>
                    <option value="2024-01">2024 Kỳ 01</option>
                    <option value="2024-02">2024 Kỳ 02</option>
                </select>
                <tbody>
                        <tr>
                            <th>MSSV</th>
                            <th>Họ Tên</th>
                            <th>ĐRL</th>
                            <th>Kỳ</th>
                            <th>{user.role}</th>
                        </tr>
                        {allDRL && allDRL.map(diemRenLuyen =>(
                            <DRLDetails key={diemRenLuyen._id} diemRenLuyen={diemRenLuyen} selectedSemester={selectedSemester}/>
                        ))}
                    </tbody>
            </div>
        )
    }
    if(user.role === 'user'){
        return(
            <div>
                <select value={selectedSemester} onChange={(e) => {
                    setSelectedSemester(e.target.value)
                    }}>
                    <option value="">Select Semester</option>
                    <option value="2024-01">2024 Kỳ 01</option>
                    <option value="2024-02">2024 Kỳ 02</option>
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
                            <th>Kỳ</th>
                            <th>{user.role}</th>
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