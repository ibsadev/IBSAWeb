import React from 'react';

const Member = ({name, position, major, image, link}) => {
    const imageStyle = {
        width: "100%",
        height: "400px",
        objectFit: "cover"
    }

    return(
            <div className="col-sm-4">
                <div className="card">
                <a href = {link}> 
                    <img variant = "top" src={image} alt={name} style={imageStyle}/>
                </a>
                <div style = {{textAlign: "center"}}>
                    <h3> {name} </h3>
                    <h5> {position} </h5>
                    <h5> {major} </h5>
                </div>
                </div>
            </div>
    )
};

export default Member;
