import React, {useState} from "react";
import "./NewStudentItem.css"

const NewStudentItem = (props) => {
  const [currentName, setCurrentName] = useState('');
  const [currentLastName, setCurrentLastName] = useState('');
  const [currentAge, setCurrentAge] = useState('');
  const nameChangeHandler = (event) => {
    setCurrentName(event.target.value)
  }

  const lastNameChangeHandler = (event) => {
    setCurrentLastName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setCurrentAge(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const newStudent = {
      name: currentName,
      surname: currentLastName,
      age: Number(currentAge)
    }

    props.onAddStudent(newStudent)

    setCurrentName("")
    setCurrentLastName("")
    setCurrentAge("")
  }

  return (
      <form onSubmit={submitHandler}>
        <div className="NewStudentContainer">
          <div className="StudentInput">
            <label>Name</label>
            <input type="text" onChange={nameChangeHandler} value={currentName}/>
          </div>
          <div className="StudentInput">
            <label>Lastname</label>
            <input type="text" onChange={lastNameChangeHandler} value={currentLastName}/>
          </div>
          <div className="StudentInput">
            <label>Age</label>
            <input type="number" min="1" max="99" step="1" onChange={ageChangeHandler} value={currentAge}/>
          </div>
        </div>
        <div className="SubmitButton">
          <button type="submit">Add Student</button>
        </div>
      </form>
  )
}

export default NewStudentItem;