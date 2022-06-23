import React, {useEffect, useState} from 'react';
import axios from "axios";

function Home() {

    const [data,setData]= useState([]);

    const loadData=async () =>{
        const response = await axios.get('http://localhost:3001/api/get');
        setData(response.data);
    }

    useEffect(()=>{
        loadData();
    },[]);

    return (
        <div>
        <nav>
          <input type="checkbox" id="check"/>
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <label class="logo">DesignX</label>
          <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </nav>
            {/* <h2>Home Page</h2>
            {data.map((item,index)=>{
                return(
                    <p>{item.id} {item.name} {item.email} {item.username} {item.password}</p>
                )
            })} */}
        </div>
    );
}

export default Home;