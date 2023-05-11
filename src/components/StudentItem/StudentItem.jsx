import "./StudentItem.css";
import StudentTags from "../StudentTags/StudentTags";

function StudentItem(props) {
  let age = props.age;

  return (
      <div className="StudentItem">
        <div>{props.name}</div>
        <div>{props.surname}</div>
        <div>{age}</div>
        <StudentTags age={age}/>
        <div>{props.bType}</div>
        <button className="btn btn-danger">Cancel</button>
      </div>
  )
}

export default StudentItem;