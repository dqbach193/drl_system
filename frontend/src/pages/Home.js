import { useEffect, useState } from "react";

//components
import DRLDetails from "../components/DRLDetails";
import DRLForm from "../components/DRLForm";

const Home = () => {
    const [allDRL, setAllDRL] = useState(null)

    useEffect(() => {
        const fetchDRL = async () => {
          const response = await fetch('/drl')
          const json = await response.json()
    
          if (response.ok) {
            console.log(json)
            setAllDRL(json)
          }
        }
    
        fetchDRL()
      }, [])
    
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
                </table>
                <DRLForm />
            </div>
        </div>
     );
}
 
export default Home;