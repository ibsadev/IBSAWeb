import React from 'react';

import './styles/About.css';

const Member = ({name, position, major, image, link}) => {
    const imageStyle = {
        width: "100%",
        height: "300px",
        objectFit: "cover"
    }

    return(
        <div className = "columns">
            <div className = "card">
                <a href = {link}>
                    <img src={image} alt={name} style = {imageStyle}/>
                </a>
                <div className = "details">
                    <h2> {name} </h2>
                    <h3> {position} </h3>
                    <p> {major} </p>
                </div>  
            </div>
        </div>
    )
};

export default Member;
