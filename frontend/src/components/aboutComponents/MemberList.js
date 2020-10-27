import React, {useState} from 'react';
import Member from './components/aboutComponents/Member';

import valImage from './components/aboutComponents/images/valProfile.jpeg';
import micImage from './components/aboutComponents/images/micProfile.jpeg';
import chaImage from './components/aboutComponents/images/chaProfile.jpg';
import dapImage from './components/aboutComponents/images/dapProfile.JPG';
import andImage from './components/aboutComponents/images/andProfile.JPG';
import winImage from './components/aboutComponents/images/winProfile.JPG';
import patImage from './components/aboutComponents/images/patProfile.HEIC';
import briImage from './components/aboutComponents/images/briProfile.jpg';


const MemberList = () => {
    const[members, setMembers] = useState([
        {
            name: 'Valerie Taruno',
            position: 'President',
            major: 'Biochemistry',
            image: valImage,
            link: 'https://www.linkedin.com/in/valerietaruno/'
        }
        ,
        {
            name: 'Michelle Tirtoatmojo',
            position: 'Vice-President',
            major: 'International Developmental Studies',
            image: micImage,
            link: 'https://www.linkedin.com/in/michelletirtoatmojo/'
        },
        {
            name: 'Chanel Salim',
            position: 'Director of Finance',
            major: 'Business Economics',
            image: chaImage,
            link: 'https://www.linkedin.com/in/angelica-chanel-salim-163b57169/'
        },
        {
            name: 'Daphne Marina',
            position: 'Director of Media and Public Relations',
            major: 'Physiological Sciences',
            image: dapImage,
            link: 'https://www.linkedin.com/in/daphne-marina-9586591b3/'
        },
        {
            name: 'Andara Atteenaputri',
            position: 'Director of Internal Events',
            major: 'Business Economics',
            image: andImage,
            link: 'https://www.linkedin.com/in/andara-atteenaputri/'
        },
        {
            name: 'Winston Wibawa',
            position: 'Director of Internal Events',
            major: 'Communication',
            image: winImage,
            link: 'https://google.com'
        },
        {
            name: 'Patrick Lukito',
            position: 'Director of External Events',
            major: 'Economics',
            image: patImage,
            link: 'https://www.linkedin.com/in/patrickwilliamlukito/'
        },
        {
            name: 'Brian Sinambela',
            position: 'Director of External Events',
            major: 'Computer Science',
            image: briImage,
            link: 'https://www.linkedin.com/in/brianroysar/'
        }
    ]);

    const team = {
        fontSize: "50px",
        fontFamily: "cursive",
        color: "black",
        textAlign: "center"
    }

    const board = {
        fontSize: "40px",
        fontFamily: "cursive",
        color: "black",
        textAlign: "center"
    }

    return(
        <div className = "team">
            <h2 style={team}> Meet The Team </h2>
            <h3 style={board}> Board </h3>
            <div className = "row">
            {members.map(member => (
                <Member name={member.name} position={member.position} major={member.major} image={member.image} link={member.link}/>
            ))}
            </div>
        </div>
    )
};

export default MemberList;