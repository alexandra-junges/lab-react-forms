import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function AddStudent({students, setStudents}) {
    
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("None");
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);


  function handleAddStudent(event) {
    event.preventDefault();
    const newStudent = {id: uuidv4(), fullName, image, phone, email, program, graduationYear, graduated};
    setStudents([newStudent, ...students]);

    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("None");
    setGraduationYear(0);
    setGraduated(false);
  }

  return (
    <div>
        
      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input 
              name="fullName" 
              type="text" 
              placeholder="Full Name" 
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
          </label>

          <label>
            Profile Image
            <input 
              name="image" 
              type="url" 
              placeholder="Profile Image" 
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </label>

          <label>
            Phone
            <input 
              name="phone" 
              type="tel" 
              placeholder="Phone" 
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </label>

          <label>
            Email
            <input 
              name="email" 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select 
              name="program"
              value={program} 
              onChange={(event) => { 
                setProgram(event.target.value); 
              }}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={(event) => {
                setGraduationYear(event.target.value);
              }}
            />
          </label>

          <label>
            Graduated
            <input 
              name="graduated" 
              type="checkbox" 
              checked={graduated}
              onChange={(event) => {
                setGraduated(event.target.value);
              }}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}
    </div>
  )
}
export default AddStudent