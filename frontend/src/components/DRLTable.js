

const DRLTable = ({allDRL, selectedSemester}) => {
    const drl = allDRL.find(drl => drl.semester === selectedSemester)
    if(selectedSemester === ''){
        return(
            <div>
                <h2>Chọn kỳ để xem điểm rèn luyện!</h2>
            </div>
        )
    }
    if(drl && selectedSemester !== ''){
        let xepLoai = '';
        if(drl.drl >= 80){
            xepLoai = 'Giỏi';
        }else if(drl.drl >= 60){
            xepLoai = 'Khá';
        }else if (drl.drl >= 45){
            xepLoai = 'Trung Bình';
        }else{
            xepLoai = 'Kém';
        }
        return ( 
        <div>
            <h2>Điểm rèn luyện của {drl.hoTen} : {drl.drl} </h2>
            
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
                    <td>- {drl.d11 ? drl.d11 : 0}</td>
                    {/* <Link to ={`/feedback/${id}`}> <button>?</button> </Link> */}
                </tr>
                <tr>
                    <td>- Bị cảnh báo học vụ (trừ 5đ)</td>
                    <td>- {drl.d12 ? drl.d12 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Đăng ký không đủ số tín chỉ theo Quy định (trừ 5đ)</td>
                    <td>- {drl.d13 ? drl.d13 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Bị cấm thi hoặc bỏ thi cuối kỳ không có lý do (trừ …. lần x 2đ/lần)</td>
                    <td>- {drl.d14 ? drl.d14 : 0}</td>
                    <button>?</button>
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
                    <td>- {drl.d21 ? drl.d21 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Đăng ký học quá hạn (nếu được chấp nhận -2đ) </td>
                    <td>- {drl.d22 ? drl.d22 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Không thực hiện theo Giấy triệu tập/Yêu cầu của Nhà trường (trừ 5đ/lần x …..lần)</td>
                    <td>- {drl.d22 ? drl.d22 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Trả quá hạn giấy tờ/hồ sơ đã được phép mượn (trừ 5đ/lần x …..lần)</td>
                    <td>- {drl.d23 ? drl.d23 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Không tham gia Bảo hiểm Y tế </td>
                    <td>- {drl.d24 ? drl.d24 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Vi phạm quy định nơi cư trú (trừ 10đ/lần x …..lần)</td>
                    <td>- {drl.d25 ? drl.d25 : 0}</td>
                    <button>?</button>
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
                    <td>+ {drl.d31 ? drl.d31 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Tham gia (có giấy xác nhận) các hoạt động văn nghệ, thể thao, câu lạc bộ, hoạt động tình nguyện,….(cộng 2đ/lần x …..lần) </td>
                    <td>+ {drl.d32 ? drl.d32 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>3.3. Trừ điểm</td>
                    <td></td>
                </tr>
                <tr>
                    <td>- Không tham gia Sinh hoạt chính trị theo Quy định (trừ 2đ/lần x …..lần)</td>
                    <td>- {drl.d33 ? drl.d33 : 0}</td>
                    <button>?</button>
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
                    <td>- {drl.d41 ? drl.d41 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Không có tinh thần giúp đỡ bạn bè, không thể hiện tinh thần đoàn kết tập thể (trừ 5đ/lần x …..lần)</td>
                    <td>- {drl.d42 ? drl.d42 : 0}</td>
                    <button>?</button>
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
                    <td>+ {drl.d51 ? drl.d51 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Đạt thành tích cao trong học tập và NCKH</td>
                    <td></td>
                </tr>
                <tr>
                    <td>+ Học lực (Xuất sắc, Giỏi): (cộng 10đ)</td>
                    <td>+ {drl.d52 ? drl.d52 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>+ Có chứng chỉ tiếng Anh vượt quy định.: (cộng 5đ)</td>
                    <td>+ {drl.d53 ? drl.d53 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>+ Tham gia các cuộc thi chuyên môn như Procon, Olympic, An toàn thông tin…: (cộng 2đ/lần x …..lần)</td>
                    <td>+ {drl.d54 ? drl.d54 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>+ Đạt giải tại các cuộc thi chuyên môn: (cộng 5đ)</td>
                    <td>+ {drl.d55 ? drl.d55 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>+ Tham gia NCKH (không phải là SV NVCL): (cộng 5đ)</td>
                    <td>+ {drl.d56 ? drl.d56 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>+ Đạt giải NCKH các cấp hoặc có báo cáo tại Hội nghị NCKH/bài báo đăng trên các tạp chí trong và ngoài nước: (cộng 5đ)</td>
                    <td>+ {drl.d57 ? drl.d57 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td>- Được kết nạp Đảng: (cộng 10đ)</td>
                    <td>+ {drl.d58 ? drl.d58 : 0}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td className='left'><b>Điểm kết luận của 5. [0, 10]</b></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='left'><b>Tổng cộng (1.+2.+3.+4.+5.) [0, 100]</b></td>
                    <td>{drl.drl}</td>
                    <button>?</button>
                </tr>
                <tr>
                    <td className='left'><b>Xếp loại</b></td>
                    <td>{ xepLoai } </td>
                </tr>
            </table>
        </div> 
        );
    }
    return(
        <div>
            <h2>Lỗi hệ thống hoặc bản điểm rèn luyện không tồn tại</h2>
        </div>
    )
}

export default DRLTable;