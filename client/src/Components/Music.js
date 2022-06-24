import React from 'react';
import musicData from './Data';
import Card from "./Card";
import "./Assets/music.css"

function Music({handleClick}) {

    return (
        <div>
            {
                musicData.map(item=>{
                    return <Card key={item.id} item={item} handleClick={handleClick}/>
                })
            }
        </div>
    );
}

export default Music;