import StudentForm from "../../components/StudentForm.jsx";
import {useEffect, useState} from "react";
import api from "../../src/api.js";
import {useNavigate, useParams} from "react-router-dom";

const EditStudent = () => {

    const [student, setStudent] = useState({
        Name: "",
        StudentID: "",
        Dept: "",
        DOB: "",
        Image: "",
    });
    const {id} = useParams();


    useEffect(() => {
        api.get(`/students/${id}`)
            .then(res => {
                setStudent(res.data);
            })
            .catch(err => console.log(err))
    },[])

    const navigate = useNavigate();

    const changeFormdata = (data) => {
        setStudent({...data});
    }

    const submitFormdata = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in student) {
            if (key == "Image" & typeof student[key]=="string") {
                console.log(student[key], key, typeof student[key]);
                continue;
            }else{
                formData.append(key, student[key]);
            }
        }
        api.patch(`/students/${id}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then((response) => navigate('/students'))
            .catch((error) => console.log(error));
    }

    return (
        <div className="container">
            <div className="shadow border rounded-lg p-4 w-full max-w-2xl mx-auto my-5">
                {/*{JSON.stringify(students)}*/}
                <h1 className="text-center text-2xl font-semibold mb-2">Update Student</h1>
                <hr/>
                <form onSubmit={event => submitFormdata(event)}>
                    <StudentForm formData={student} setFormData={changeFormdata}/>
                    <button className="btn w-full bg-black text-white uppercase font-semibold">Sumbit</button>
                </form>
            </div>

        </div>
    );
};

export default EditStudent;