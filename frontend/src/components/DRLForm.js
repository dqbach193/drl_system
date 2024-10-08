import { useState } from "react";
import { useDRLContext } from "../hooks/useDRLContext";
import { useAuthContext } from '../hooks/useAuthContext';

const DRLForm = () => {
    const {dispatch} = useDRLContext();
    const {user} = useAuthContext();
    const[mssv, setMssv] = useState('')
    const[hoTen, setHoTen] = useState('')
    const[drl, setDrl] = useState('')
    const[userClass, setUserClass] = useState('')
    const[semester, setSemester] = useState('')
    const[error, setError] = useState('')


    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!user){
            setError('You must be logged in')
            return
        }
        const diemRenLuyen = {mssv, hoTen, drl, userClass, semester}

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
            <h3>Thêm Điểm rèn luyện <button>Thêm</button></h3>

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

            <label>Lớp</label>
            <input 
                type="text" 
                onChange={(e) => setUserClass(e.target.value)}
                value={userClass}
            />

            <label>Kỳ học</label>
            <select value={semester} onChange={(e) => setSemester(e.target.value)}>
                <option value="">Chọn kỳ học</option>
                <option value="2024-01">Kỳ 1 năm 2023-2024</option>
                <option value="2024-02">Kỳ 2 năm 2023-2024</option>
            </select>

            <label>Điểm rèn luyện:</label>
            <input 
                type="number" 
                onChange={(e) => setDrl(e.target.value)}
                value={drl}
            />

<table>
                    <tr>
                        <th>Nội dung đánh giá</th>
                        <th>Điểm</th>
                    </tr>
                    <tr>
                        <td><b> 1. Ý thức học tập</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1.1. Điểm chuẩn</td>
                        <td>+30</td>
                    </tr>
                    <tr>
                        <td>1.2. Trừ điểm</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>- Học lực yếu (trừ 3đ)</td>
                        <td>-<input/></td>
                    </tr>
                    <tr>
                        <td>- Bị cảnh báo học vụ (trừ 5đ)</td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td>- Đăng ký không đủ số tín chỉ theo Quy định (trừ 5đ)</td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td>- Bị cấm thi hoặc bỏ thi cuối kỳ không có lý do (trừ …. lần x 2đ/lần)</td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td>- Kỷ luật thi ( Đình chỉ,  Cảnh cáo,  Khiển trách): Trừ tương ứng 25% /50% /100% tổng số điểm của Nội dung 1.</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='left'><b> Điểm kết luận của 1. [0, 30]</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>2. Ý thức và kết quả chấp hành nội quy, quy chế trong nhà trường</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2.1. Điểm chuẩn</td>
                        <td>+25</td>
                    </tr>
                    <tr>
                        <td>2.2. Trừ điểm</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>- Nộp hoặc nhận không đúng một khoản kinh phí (trừ 5đ/lần x …..lần)</td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td>- Đăng ký học quá hạn (nếu được chấp nhận -2đ) </td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td>- Không thực hiện theo Giấy triệu tập/Yêu cầu của Nhà trường (trừ 5đ/lần x …..lần)</td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td>- Trả quá hạn giấy tờ/hồ sơ đã được phép mượn (trừ 5đ/lần x …..lần)</td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td>- Không tham gia Bảo hiểm Y tế </td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td>- Vi phạm quy định nơi cư trú (trừ 10đ/lần x …..lần)</td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td>Có quyết định kỷ luật ( Cảnh cáo, Khiển trách,  Phê bình): Trừ tương ứng 25% /50% /100% tổng số điểm của Nội dung 2.</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='left'><b>Điểm kết luận của 2. [0, 25]</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>3. Ý thức và kết quả tham gia hoạt động chính trị - xã hội, văn hoá, văn nghệ, thể thao, phòng chống các tệ nạn xã hội</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3.1. Điểm chuẩn</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>- Tham gia đầy đủ các hoạt động của chi đoàn và tham gia đầy đủ các buổi sinh hoạt chính trị theo triệu tập (nếu có) của Nhà trường và tham gia đầy đủ các buổi sinh hoạt chính trị theo triệu tập (nếu có) của Nhà trường (cộng 10đ)</td>
                        <td>+ <input/></td>
                    </tr>
                    <tr>
                        <td>- Tham gia (có giấy xác nhận) các hoạt động văn nghệ, thể thao, câu lạc bộ, hoạt động tình nguyện,….(cộng 2đ/lần x …..lần) </td>
                        <td>+ <input/></td>
                    </tr>
                    <tr>
                        <td>3.3. Trừ điểm</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>- Không tham gia Sinh hoạt chính trị theo Quy định (trừ 2đ/lần x …..lần)</td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td className='left'><b>Điểm kết luận của 3. [0, 20]</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>4. Về phẩm chất công dân và quan hệ với cộng đồng</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4.1. Điểm chuẩn</td>
                        <td>+15</td>
                    </tr>
                    <tr>
                        <td>4.2. Trừ điểm</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>- Có Thông báo bằng văn bản về việc không chấp hành các chủ trương của Đảng, chính sách pháp luật của Nhà nước, vi phạm an ninh chính trị, trật tự an toàn xã hội, an toàn giao thông, (trừ 5đ/lần x …..lần)</td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td>- Không có tinh thần giúp đỡ bạn bè, không thể hiện tinh thần đoàn kết tập thể (trừ 5đ/lần x …..lần)</td>
                        <td>- <input/></td>
                    </tr>
                    <tr>
                        <td className='left'><b>Điểm kết luận của 4. [0, 15]</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>5. Ý thức và kết quả tham gia công tác phụ trách lớp, các đoàn thể, tổ chức trong nhà trường hoặc đạt được thành tích đặc biệt trong học tập, rèn luyện của học sinh, sinh viên</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5.1. Điểm chuẩn</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>5.2. Cộng điểm</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>- Giữ các chức vụ trong các tổ chức chính quyền, đoàn thể và được đánh giá hoàn thành tốt nhiệm vụ: (cộng 10đ)</td>
                        <td>+ <input/></td>
                    </tr>
                    <tr>
                        <td>- Đạt thành tích cao trong học tập và NCKH</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>+ Học lực (Xuất sắc, Giỏi): (cộng 10đ)</td>
                        <td>+ <input/></td>
                    </tr>
                    <tr>
                        <td>+ Có chứng chỉ tiếng Anh vượt quy định.: (cộng 5đ)</td>
                        <td>+ <input/></td>
                    </tr>
                    <tr>
                        <td>+ Tham gia các cuộc thi chuyên môn như Procon, Olympic, An toàn thông tin…: (cộng 2đ/lần x …..lần)</td>
                        <td>+ <input/></td>
                    </tr>
                    <tr>
                        <td>+ Đạt giải tại các cuộc thi chuyên môn: (cộng 5đ)</td>
                        <td>+ <input/></td>
                    </tr>
                    <tr>
                        <td>+ Tham gia NCKH (không phải là SV NVCL): (cộng 5đ)</td>
                        <td>+ <input/></td>
                    </tr>
                    <tr>
                        <td>+ Đạt giải NCKH các cấp hoặc có báo cáo tại Hội nghị NCKH/bài báo đăng trên các tạp chí trong và ngoài nước: (cộng 5đ)</td>
                        <td>+ <input/></td>
                    </tr>
                    <tr>
                        <td>- Được kết nạp Đảng: (cộng 10đ)</td>
                        <td>+ <input/></td>
                    </tr>
                    <tr>
                        <td className='left'><b>Điểm kết luận của 5. [0, 10]</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='left'><b>Tổng cộng (1.+2.+3.+4.+5.) [0, 100]</b></td>
                        <td><input/></td>
                    </tr>
                    
                </table>

            <button>Thêm</button>

            {error && <div className="error">{error}</div> }
        </form>
     );
}
 
export default DRLForm;