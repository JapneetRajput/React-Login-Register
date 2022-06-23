import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import Music from "./Music";

function Home({handleClick}) {

    return (
        <>
            <Navbar/>
            <Music handleClick={handleClick}/>
        </>
    );
}

export default Home;