import { useEffect } from "react";
import { useDRLContext } from "../hooks/useDRLContext";
import { Link } from "react-router-dom";
import {useAuthContext} from "../hooks/useAuthContext"

//components
import DRLDetails from "../components/DRLDetails";

const Home = () => {

    const {allDRL, dispatch} = useDRLContext();
    const {user} = useAuthContext();

    useEffect(() => {
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
            fetchWorkouts()
          }
      }, [dispatch, user])
    
    return ( 
        <div className="home">
            <div className="drl">
                <table id="drl-table">
                    <tbody>
                        <tr>
                            <th>MSSV</th>
                            <th>Họ Tên</th>
                            <th>ĐRL</th>
                        </tr>
                        {allDRL && allDRL.map(diemRenLuyen =>(
                            <DRLDetails key={diemRenLuyen._id} diemRenLuyen={diemRenLuyen}/>
                        ))}
                    </tbody>

                    <Link to='/create'><button className="addDRL">Thêm điểm rèn luyện</button></Link>
                </table>
            </div>
        </div>
     );
}
 
export default Home;