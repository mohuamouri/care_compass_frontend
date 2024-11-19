import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import TodosPage from "../pages/TodosPage.jsx";
import Students from "../pages/student/Students.jsx";
import Student from "../pages/student/Student.jsx";
import EditStudent from "../pages/student/EditStudent.jsx";
import AddStudent from "../pages/student/AddStudent.jsx";
import ErrorLayout from "../pages/ErrorLayout.jsx";
import NotFound from "../pages/NotFound.jsx";
import Signin from "../pages/auth/Signin.jsx";
import Signup from "../pages/auth/Signup.jsx";
import Verify from "../pages/auth/Verify.jsx";

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/todos" element={<TodosPage/>}/>
                    <Route path="/students" element={<Students/>}/>
                    <Route path="/students/:id" element={<Student/>}/>
                    <Route path="/students/edit/:id" element={<EditStudent/>}/>
                    <Route path="/students/add" element={<AddStudent/>}/>
                    <Route path="/login" element={<Signin/>}/>
                    <Route path="/registration" element={<Signup/>}/>
                    <Route path="/email-verification" element={<Verify/>}/>

                </Route>
                <Route path='/*' element={<ErrorLayout/>}>
                    <Route path="*" element={<NotFound/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;
