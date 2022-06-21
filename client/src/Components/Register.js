import "./Assets/App.css";
import { useState } from "react";
import Axios from "axios";

function Register() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [country, setCountry] = useState("");
//   const [position, setPosition] = useState("");
//   const [wage, setWage] = useState(0);

  const [nameReg,setNameReg]=useState('');
  const [emailReg,setEmailReg]=useState('');
  const [usernameReg,setUsernameReg]=useState('');
  const [passwordReg,setPasswordReg]=useState('');
  const [confirmPasswordReg,setConfirmPasswordReg]=useState('');

//   const [newWage, setNewWage] = useState(0);

  const [userList, setUserList] = useState([]);

  const addUser = () => {
    Axios.post("http://localhost:3001/register", {
      name: nameReg,
      email: emailReg,
      username: usernameReg,
      password: passwordReg,
      confirmPassword: confirmPasswordReg
    }).then(() => {
      setUserList([
        ...userList,
        {
            name: nameReg,
            email: emailReg,
            username: usernameReg,
            password: passwordReg,
            confirmPassword: confirmPasswordReg
        },
      ]);
    });
  };

//   const getEmployees = () => {
//     Axios.get("http://localhost:3001/employees").then((response) => {
//       setEmployeeList(response.data);
//     });
//   };

//   const updateEmployeeWage = (id) => {
//     Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
//       (response) => {
//         setEmployeeList(
//           employeeList.map((val) => {
//             return val.id == id
//               ? {
//                   id: val.id,
//                   name: val.name,
//                   country: val.country,
//                   age: val.age,
//                   position: val.position,
//                   wage: newWage,
//                 }
//               : val;
//           })
//         );
//       }
//     );
//   };

//   const deleteEmployee = (id) => {
//     Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
//       setEmployeeList(
//         employeeList.filter((val) => {
//           return val.id != id;
//         })
//       );
//     });
//   };

  return (
    <>
    <div className="login-box">
                <h1>Register</h1>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) =>{
                            setNameReg(e.target.value);
                        }}
                        value={nameReg}
                        id="name"
                        name="name"
                    />
                    <br/><br/>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) =>{
                            setEmailReg(e.target.value)}}
                        value={emailReg}
                        id="email"
                        name="email"
                    />
                    <br/><br/>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) =>{
                            setUsernameReg(e.target.value);
                        }}
                        value={usernameReg}
                        id="username"
                        name="username"
                    />
                    <br/><br/>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) =>{
                            setPasswordReg(e.target.value);
                        }}
                        value={passwordReg}
                        id="password"
                        name="password"
                    />
                    <br/><br/>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(event) => {
                            setConfirmPasswordReg(event.target.value);
                        }}
                        value={confirmPasswordReg}
                    />
                    <a href="/home" className='aa' onClick={addUser}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Register
                    </a>
                </div><br/><br/>
                <span>Already a user? Click <a href='/'>here</a></span>
            </div>
      {/* <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default Register;