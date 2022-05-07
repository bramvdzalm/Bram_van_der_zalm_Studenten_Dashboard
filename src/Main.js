import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import Overview from "./pages/Overview";
import Students from "./pages/Students";
import Student from "./pages/Student";
import StudentData from "./studentdata/StudentData";


const filterWeek = (studentData, filter) => {
  return studentData.filter((item) => {
    return item.assignment.includes(filter);
  });
};

const filterStudents = (studentData) => {
  const students = [];
  studentData.forEach((item) => {
    if (!students.includes(item.name)) {
      students.push(item.name);
    }
  });
  return students;
};

function Main() {
  const studentData = filterWeek(StudentData, "W1");
  const students = filterStudents(StudentData);
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview studentData={studentData} students={students} />}/>
          <Route path="/Students/" element={<Students students={students} />}/>  
          <Route path="/Students/Student/:name" element={<Student studentData={studentData} students={students} />}/>           
        </Routes>
    </BrowserRouter>
  );
}

export default Main;