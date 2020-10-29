import React from 'react';
import group from './images/group2.JPG';

export default () => {
    const imgStyle = {
        display: "inline-block",
        height: "300px",
        width: "50%",
        objectFit: "cover",
        marginLeft: "10px",
        float: "center"
    }

    return (
        <div className="descript">
            <h2 className = "head"> Who Are We </h2>
            <div className = "content">
                    Hi everyone! Welcome to IBSA! Indonesian Bruins Student Association(IBSA) 
                    is a UCLA based student organization that promotes and celebrates Indonesian 
                    culture in the UCLA community. In addition, IBSA also promotes Indonesian art 
                    and culture in the broader UCLA community and aims to integrate others of various 
                    backgrounds that have a common interest in Indonesia and its culture.
                    <img src = {group} alt = "group" style = {imgStyle}/>
            </div>
        </div>
    )
}