import StudentForm from "../../components/StudentForm.jsx";
import {useState} from "react";
import api from "../../src/api.js";
import {useNavigate} from "react-router-dom";

const AddStudent = () => {

    const [student, setStudent] = useState({
        Name: "",
        StudentID: "",
        Dept: "",
        DOB: "",
        Image: "",
    });

    const navigate = useNavigate();

    const changeFormdata = (data) => {
        setStudent(data);
    }

    const submitFormdata = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in student) {
            formData.append(key, student[key]);
        }
        api.post("/students/", student, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then((response) => navigate('/students'))
    }

    return (
        <div className="container">
            <div className="shadow border rounded-lg p-4 w-full max-w-2xl mx-auto my-5">
                {/*{JSON.stringify(students)}*/}
                <h1 className="text-center text-2xl font-semibold mb-2">Add Student</h1>
                <hr/>
                <form onSubmit={event => submitFormdata(event)}>
                    <StudentForm formData={student} setFormData={changeFormdata}/>
                    <button className="btn w-full bg-black text-white uppercase font-semibold">Sumbit</button>
                </form>
            </div>

        </div>
    );
};

export default AddStudent;