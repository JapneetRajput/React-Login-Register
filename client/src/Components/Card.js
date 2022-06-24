import React from 'react';
import './Assets/Card.css';
function Card({item,handleClick}) {
    const {id,author_name,img,musicName}=item;

    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="Image" />
            </div><br/>
            <div className="details">
                <p id='music_name'>{musicName}</p><br/>
                <p id='author_name'>{author_name}</p><br/>
                <button onClick={()=>handleClick(item)}>Add to playlist</button>
            </div>
        </div>
    );
}

export default Card;