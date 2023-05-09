import { useState } from "react";
import StudentItem from "../StudentItem/StudentItem";
import "./StudentList.css";

export function StudentList(props) {
  const studentList = props.studentList;
  const [curBType, setCurBType] = useState("A");

  const filteredStudents = studentList.filter((e) => e.bType === curBType);

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
      <div>
        {filteredStudents.length === 0 && <div>Not found</div>}
        {filteredStudents.map((e) => (
          <StudentItem
            key={e.id}
            name={e.name}
            surname={e.surname}
            age={e.age}
            bType={e.bType}
          />
        ))}
      </div>
    </>
  );
}

export default StudentList;
