import React, { useState } from 'react';
import './Assets/App.css';
import Axios from "axios";

function Login() {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const [loginStatus,setLoginStatus]=useState('');

    // const getCreds =() => {
    // Axios.get("http://localhost:3001/login")
    //     .then(
    //         (response) => {
    //           setEmployeeList(
    //             employeeList.map((val) => {
    //                 return val.id == id
    //                     ? {
    //                         id: val.id,
    //                         name: val.name,
    //                         country: val.country,
    //                         age: val.age,
    //                         position: val.position,
    //                         wage: newWage,
    //                     }
    //                     : val;
    //                 })
    //             );
    //         });
        //     (response) => {
        //     setEmployeeList(response.data);
        //     response.data.map()
        // });
    // };

    const login = () =>{
        Axios.post('http://localhost:3001/login',{
            username:username,
            password:password
        }).then((response)=>{
            console.log(response);
            if(response.data.message){
                setLoginStatus(response.data.message);
            }
            else{
                setLoginStatus(response.data[0].username);
            }
            // response.map(e=>{

            // })
        });
    };

    return (
        <>
            <div className="login-box">
                <h1>Login</h1>
                <div className='form'>
                    <input 
                        type="text" 
                        placeholder="Username"
                        onChange={(e) =>{
                            setUsername(e.target.value);
                        }}
                        value={username}
                    />
                    <br/><br/>
                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange={(e) =>{
                            setPassword(e.target.value);
                        }}
                        value={password}
                    />
                    <br/><br/>
                    <a className='aa' onClick={login}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </a>
                </div><br/><br/>
                <span>New user? Click <a href='register'>here</a></span>
            </div>
            <h1>{loginStatus}</h1>
        </>
    );
}

export default Login;