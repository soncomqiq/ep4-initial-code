import "./StudentItem.css";
import StudentTags from "../StudentTags/StudentTags";

function StudentItem(props) {
  let age = props.age;

  return (
    <div className="StudentItem">
      <div>{props.name}</div>
      <div>{props.surname}</div>
      <div>{age}</div>
      <StudentTags age={age} />
      <div>{props.bType}</div>
      <button
        onClick={() => props.deleteHandler(props.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
}

export default StudentItem;
