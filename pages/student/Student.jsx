import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../../src/api.js";

const Student = () => {

    // const histry = useHistory()
    const navigate = useNavigate();
    const {id} = useParams();
    const [student, setStudent] = useState({});
    useEffect(() => {
        api.get(`/students/${id}`)
            .then(res => setStudent(res.data))
            .catch(err => console.log(err))
    },[])
    return (
        <div className='container'>
            <div className='my-5 p-3 max-w-80 border border-slate-400 shadow rounded-lg space-y-5 mx-auto'>
                <div className="">
                    <img src={student.Image} alt={student.Name} className='w-full sm:w-5/6 mx-auto rounded '/>
                </div>
                <div className='space-y-2 text-center'>
                    <h1 className="font-semibold text-2xl">{student.Name}</h1>
                    <p>{student.StudentID}</p>
                    <p>{student.Dept}</p>
                    <h1>{student.DOB}</h1>
                </div>
                <div>
                    <button className="btn bg-purple-700 w-full" onClick={()=>navigate(-1)}>Back</button>
                </div>
            </div>
        </div>
    );
};


export default Student;