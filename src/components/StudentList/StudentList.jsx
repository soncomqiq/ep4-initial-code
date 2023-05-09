import StudentItem from "../StudentItem/StudentItem";
import "./StudentList.css";

export function StudentList(props) {
  const studentList = props.studentList;

  return (
    <>
      <div className="selectdiv">
        <label>
          <select>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="AB">AB</option>
          </select>
        </label>
      </div>
      <div>
        {studentList.map((e) => (
          <StudentItem
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
