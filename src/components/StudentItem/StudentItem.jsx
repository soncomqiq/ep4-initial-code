import "./StudentItem.css";
import StudentTags from "../StudentTags/StudentTags";
import {useState} from "react";

function StudentItem(props) {
  let age = props.age;
  const [name, setName] = useState(props.name);

  const nameHandler = () => {
    setName("Changed");
  }

  return (
      <div className="StudentItem">
        <div>{name}</div>
        <div>{props.surname}</div>
        <div>{age}</div>
        <StudentTags age={age}/>
        <button onClick={nameHandler}>Click</button>
      </div>
  )
}

export default StudentItem;