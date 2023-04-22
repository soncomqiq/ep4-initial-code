import StudentItem from "../StudentItem/StudentItem";
import "./StudentList.css";

export function StudentList(props) {
  const studentList = props.studentList;

  return (
    <>
      <div class="selectdiv">
        <label>
          <select>
            <option value="retired">Retired</option>
            <option value="working">Working</option>
          </select>
        </label>
      </div>
      <div>
        <StudentItem
          name={studentList[0].name}
          surname={studentList[0].surname}
          age={studentList[0].age}
        />
        <StudentItem
          name={studentList[1].name}
          surname={studentList[1].surname}
          age={studentList[1].age}
        />
        <StudentItem
          name={studentList[2].name}
          surname={studentList[2].surname}
          age={studentList[2].age}
        />
        <StudentItem
          name={studentList[3].name}
          surname={studentList[3].surname}
          age={studentList[3].age}
        />
      </div>
    </>
  );
}

export default StudentList;
