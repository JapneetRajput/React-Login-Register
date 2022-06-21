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
            <h2>Home Page</h2>
            {data.map((item,index)=>{
                return(
                    <p>{item.id} {item.name} {item.email} {item.username} {item.password}</p>
                )
            })}
        </div>
    );
}

export default Home;