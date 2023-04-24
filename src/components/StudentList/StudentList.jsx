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
        <StudentItem
          name={studentList[0].name}
          surname={studentList[0].surname}
          age={studentList[0].age}
          bType={studentList[0].bType}
        />
        <StudentItem
          name={studentList[1].name}
          surname={studentList[1].surname}
          age={studentList[1].age}
          bType={studentList[1].bType}
        />
        <StudentItem
          name={studentList[2].name}
          surname={studentList[2].surname}
          age={studentList[2].age}
          bType={studentList[2].bType}
        />
        <StudentItem
          name={studentList[3].name}
          surname={studentList[3].surname}
          age={studentList[3].age}
          bType={studentList[3].bType}
        />
      </div>
    </>
  );
}

export default StudentList;
