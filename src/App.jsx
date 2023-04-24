import { useState } from "react";
import "./App.css";
import NewStudentItem from "./components/NewStudentItem/NewStudentItem";
import StudentList from "./components/StudentList/StudentList";

function App() {
  const studentList = [
    { id: 1, name: "Samuel", surname: "Jackson", age: 73, bType: "O" },
    { id: 2, name: "Keanu", surname: "Reeves", age: 58, bType: "A" },
    { id: 3, name: "Tom", surname: "Cruise", age: 60, bType: "AB" },
    { id: 4, name: "Johnny", surname: "Depp", age: 59, bType: "B" },
  ];
  const [status, setStatus] = useState("Available");

  const clickEventHandler = () => {
    setStatus("Busy");
    console.log("status: ", status);
  };

  const addStudentHandler = (newStudentData) => {
    const newStudent = {
      ...newStudentData,
      id: Math.random().toString(),
    };
    console.log(newStudent);
  };

  return (
    <div className="App">
      <NewStudentItem onAddStudent={addStudentHandler} />
      <hr/>
      <StudentList studentList={studentList}/>
      <h3>Status: {status}</h3>
      <button onClick={clickEventHandler}>Click me</button>
    </div>
  );
}

export default App;
