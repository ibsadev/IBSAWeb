import React from 'react';
import { Card} from 'react-bootstrap';

const Member = ({name, position, major, image, link}) => {
    const imageStyle = {
        width: "100%",
        height: "400px",
        objectFit: "cover"
    }

    return(
            <Card className="m-4" style={{ width: "22rem" }}>
                <a href = {link} target="_blank"> 
                    <Card.Img variant = "top" src={image} alt={name} style={imageStyle}/>
                </a>
                <Card.Body style = {{textAlign: "center"}}>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text> {position} </Card.Text>
                    <Card.Text> {major} </Card.Text>
                </Card.Body>  
            </Card>
    )
};

export default Member;
