import React from 'react';
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

function Profile(props) {
    return (
        <div>
            <Navbar/><br/><br/><br/><br/><br/>
            <button style={{padding:'20px',color:"#0d1117",backgroundColor:"#c9d1d9",borderRadius:'10px',cursor:'pointer',fontSize:'50px',width:'250px',height:'200x',textDecoration:'none'}}><Link style={{textDecoration:'none',color:'#0d1117'}} to='/'>Logout</Link></button>
        </div>
    );
}

export default Profile;