import React from 'react';

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
                    <h3> {name} </h3>
                    <h4> {position} </h4>
                    <p> {major} </p>
                </div>  
            </div>
        </div>
    )
};

export default Member;
