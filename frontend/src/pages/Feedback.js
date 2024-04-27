import {useParams, useNavigate} from 'react-router-dom'

const Feedback = () => {
    const { id } = useParams();
    return ( 
        <div>
            <h1>Trang phản hồi báo cáo id: {id}</h1>
            <textarea name="" id="" cols="50" rows="5"></textarea>
            <input id="file" name="file" type="file" />
            <button>Upload minh chứng</button>
        </div>
     );
}
 
export default Feedback;