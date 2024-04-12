import { useState } from "react";
import { useDRLContext } from "../hooks/useDRLContext";
import { useAuthContext } from '../hooks/useAuthContext';

const DRLForm = () => {
    const {dispatch} = useDRLContext();
    const {user} = useAuthContext();
    const[mssv, setMssv] = useState('')
    const[hoTen, setHoTen] = useState('')
    const[drl, setDrl] = useState('')
    const[error, setError] = useState('')


    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!user){
            setError('You must be logged in')
            return
        }
        const diemRenLuyen = {mssv, hoTen, drl}

        const response = await fetch('/drl', {
            method: 'POST',
            body: JSON.stringify(diemRenLuyen),
            headers:{
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setMssv('')
            setHoTen('')
            setDrl('')
            setError(null)
            console.log('Them diem ren luyen', json)
            dispatch({type:'CREATE_DRL', payload: json})
        }
    }

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Thêm Điểm rèn luyện</h3>

            <label>Mã số sv:</label>
            <input 
                type="number" 
                onChange={(e) => setMssv(e.target.value)}
                value={mssv}
            />

            <label>Họ và tên:</label>
            <input 
                type="text" 
                onChange={(e) => setHoTen(e.target.value)}
                value={hoTen}
            />

            <label>Điểm rèn luyện:</label>
            <input 
                type="number" 
                onChange={(e) => setDrl(e.target.value)}
                value={drl}
            />

            <button>Thêm</button>

            {error && <div className="error">{error}</div> }
        </form>
     );
}
 
export default DRLForm;