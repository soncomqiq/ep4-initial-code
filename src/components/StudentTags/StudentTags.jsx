import "./StudentTags.css"

function StudentTags(props) {
  const age = props.age;
  let retired = age >= 60;
  let year = new Date().getFullYear() - age;

  let yearClassName = "Tag ";
  const reminder = year % 4;

  switch (reminder) {
    case 1:
      yearClassName += "Red"
      break;
    case 2:
      yearClassName += "Green"
      break;
    case 3:
      yearClassName += "LightBlue"
      break;
    default:
      yearClassName += "Blue"
  }

  return (
      <div className="AgeGroup">
        <div className={retired ? "Tag Retired" : "Tag Working"}>{retired ? "Retired" : "Working"}</div>
        <div className={yearClassName}>{year}</div>
      </div>
  )
}

export default StudentTags;