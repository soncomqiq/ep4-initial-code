import { useState } from "react";
import StudentItem from "../StudentItem/StudentItem";
import "./StudentList.css";

export function StudentList(props) {
  const studentList = props.studentList;
  const [curBType, setCurBType] = useState("A");

  const filteredStudents = studentList.filter((e) => e.bType === curBType);

  let filteredContent = <div>Not found</div>;

  if (filteredStudents.length > 0) {
    filteredContent = filteredStudents.map((e) => (
      <StudentItem
        deleteHandler={props.deleteHandler}
        id={e.id}
        key={e.id}
        name={e.name}
        surname={e.surname}
        age={e.age}
        bType={e.bType}
      />
    ));
  }

  return (
    <>
      <div className="selectdiv">
        <label>
          <select
            value={curBType}
            onChange={(e) => setCurBType(e.target.value)}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="AB">AB</option>
          </select>
        </label>
      </div>
      <div>{filteredContent}</div>
    </>
  );
}

export default StudentList;
