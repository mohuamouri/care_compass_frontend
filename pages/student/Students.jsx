import {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";
import api from "../../src/api.js";

const Students = () => {
    const [students, setStudents] = useState([]);


    useEffect(() => {
        console.log("Called useEffect");

        loadStudents();
    }, []);


    const loadStudents = () => {
        api.get(`/students`)
            .then(res => setStudents(res.data))
            .catch((error) => console.log(error));

    }

    const deleteStudent = (id) => {
        let confirmation = confirm("Are you sure you want to delete this student?", id);

        if (confirmation) {
            api.delete(`/students/${id}`)
                .then((response) => {
                    console.log(response);
                    loadStudents()
                })
                .catch((error) => console.log(error));
        }

    }

    return (
        <div className="container">
            <div className="lg:w-4/6 w-full mx-auto my-5 border p-4 rounded-lg shadow-2xl">
                <div className='flex justify-between items-center'>
                    <h1 className="font-semibold text-3xl mb-5">Students</h1>
                    <NavLink to='/students/add' className="ring-2 px-3 py-1 rounded-lg">
                        <FontAwesomeIcon icon={faAdd}/>
                    </NavLink>
                </div>
                <div className="overflow-scroll">
                    <table className="border-collapse border border-slate-400 w-full p-3">
                        <thead>
                        <tr>
                            <th className="border border-slate-300 p-2"> Student ID</th>
                            <th className="border border-slate-300 p-2">Name</th>
                            <th className="border border-slate-300 p-2">Department</th>
                            <th className="border border-slate-300 p-2">Date of birth</th>
                            <th className="border border-slate-300 p-2">Image</th>
                            <th className="border border-slate-300 p-2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students.map(({id,StudentID, Name, Dept, DOB, Image}) => {
                            return (
                                <tr key={id}>
                                    <td className="border border-slate-300 p-2">{StudentID}</td>
                                    <td className="border border-slate-300 p-2">{Name}</td>
                                    <td className="border border-slate-300 p-2">{Dept}</td>
                                    <td className="border border-slate-300 p-2">{DOB}</td>
                                    <td className="border border-slate-300 p-2">
                                        <img src={Image} alt="" width='60' className=" mx-auto"/>
                                    </td>
                                    <td className="border border-slate-300 ">
                                        <div className="flex w-full justify-between p-2 ">
                                            <button className="btn bg-red-600" onClick={() => deleteStudent(id)}>
                                                <FontAwesomeIcon icon={faTrash}/>

                                            </button>
                                            <NavLink className="btn bg-green-500" to={`/students/edit/${id}`}>
                                                <FontAwesomeIcon icon={faEdit} size="1x"/>
                                            </NavLink>
                                            <NavLink className="btn bg-blue-500" to={`/students/${id}`}>
                                                <FontAwesomeIcon icon={faEye} size="1x"/>
                                            </NavLink>
                                        </div>
                                    </td>
                                </tr>);
                        })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Students;
