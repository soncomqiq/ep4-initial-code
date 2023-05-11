import "./StudentItem.css";
import StudentTags from "../StudentTags/StudentTags";
import { useState } from "react";

function StudentItem(props) {
  let age = props.age;
  const [isEdit, setIsEdit] = useState(false);
  const [curName, setCurName] = useState("");
  const [curSurname, setCurSurname] = useState("");
  const [curAge, setCurAge] = useState("");
  const [curBType, setCurBType] = useState("A");

  const onClickEdit = () => {
    setIsEdit(true);
    setCurAge(age);
    setCurName(props.name);
    setCurSurname(props.surname);
    setCurBType(props.bType);
  };

  const onClickDone = () => {
    const editValues = {
      name: curName,
      surname: curSurname,
      age: curAge,
      bType: curBType,
    };
    props.editHandler(props.id, editValues);
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <div className="StudentItem">
        <input
          className="edit-input"
          placeholder="Name"
          value={curName}
          onChange={(e) => setCurName(e.target.value)}
        />
        <input
          className="edit-input"
          placeholder="Surname"
          value={curSurname}
          onChange={(e) => setCurSurname(e.target.value)}
        />
        <input
          className="edit-input"
          placeholder="age"
          min="1"
          max="99"
          step="1"
          type="number"
          value={curAge}
          onChange={(e) => setCurAge(e.target.value)}
        />
        <select
          className="edit-select"
          onChange={(e) => setCurBType(e.target.value)}
          value={curBType}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="O">O</option>
          <option value="AB">AB</option>
        </select>
        <button onClick={onClickDone} className="btn btn-success">
          Done
        </button>
        <button onClick={() => setIsEdit(false)} className="btn btn-primary">
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="StudentItem">
      <div>{props.name}</div>
      <div>{props.surname}</div>
      <div>{age}</div>
      <StudentTags age={age} />
      <div>{props.bType}</div>
      <button onClick={onClickEdit} className="btn btn-warning">
        Edit
      </button>
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
