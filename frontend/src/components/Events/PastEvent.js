import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {mediaQueries,colors} from '../../shared/config'
import {HorizontalLine, Heading} from '../../shared/sharedStyles'
import axios from 'axios';

// component declaration

export default function PastEvent(props) {
   const [pastEvents, setPastEvents] = useState([])
   const [shownEvents, setShownEvents] = useState(3);

   useEffect(() => {
      async function getPastEvents() {
        let res = await axios.get('http://ibsa-deployment.herokuapp.com/api/instagram/pastevents');
        let data = res.data;
        setPastEvents(data);
      }
      getPastEvents();
    }, [])

   const maxEvents = pastEvents.length;
   pastEvents.sort((a, b) => {
      return -(Date.parse(a.date) - Date.parse(b.date))
   })

   const handleLoadMore = () => {
      setShownEvents(prevShownEvents => {
         return prevShownEvents + 3 >= maxEvents ? maxEvents : prevShownEvents + 3;
      })
   }

   const handleCollapse = () => {
      setShownEvents(3);
   }
   return (
      <Container>
         <Heading>PAST EVENTS</Heading>
         <HorizontalLine />
         {pastEvents && pastEvents.slice(0, shownEvents).map((block, index) => 
            <EventsContainer
               key = {index}
            >
               <Title className="heading">
                  {block.link
                     ? (<GDriveLink href={`https://${block.link}`}>{block.title}</GDriveLink>)
                     : (block.title)
                  }
               </Title>
               <ImageSlide
                  justifyContent = {block.images.length < 3 ? "center" : "flex-start"}
                  justifyContentTablet = {block.images.length < 3 ? "center" : "flex-start"}
               >
                  {block.images.map((image, id) => 
                     <Image src={image} key={id} className="img-fluid" />
                  )}
               </ImageSlide>
            </EventsContainer>
         )}
         {
            shownEvents === maxEvents 
            ? <Button onClick={handleCollapse}> COLLAPSE </Button>
            : <Button onClick={handleLoadMore}> LOAD MORE </Button>
         }
         
      </Container>
   )
}

// styled components declaration

const Container = styled.div`
   padding-bottom: 2em;
`

const Title= styled.h2`
   color : ${colors.white};
   margin-bottom: 1.5em;
   font-size: 2.5em;
   text-transform: uppercase;
   text-align: center;
   ${mediaQueries.mobile} {
      font-size: 1.75em;
   }
`

const GDriveLink = styled.a`
   text-decoration: none;
   color: ${colors.white};
   &:hover {
      text-decoration: underline;
   }
`

const EventsContainer = styled.div`
   margin: 5em auto 0 auto;
   padding: 4em;
   background-color: ${colors.blue};
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 75%;
   ${mediaQueries.tablet} {
      width: 90%;
      padding: 3em;
   }
   ${mediaQueries.mobile} {
      width: 95%;
      padding: 2em;
   }
`;

const ImageSlide = styled.div`
   padding-bottom: 0.5em;
   display: flex;
   overflow-x: auto;
   -webkit-overflow-scrolling: touch;
   align-items: center;
   justify-content: ${props => props.justifyContent};
   ${mediaQueries.tablet} {
      justify-content: ${props => props.justifyContentTablet};
   }
   ${mediaQueries.mobile} {
      align-items: center;
      justify-content: flex-start;
   }
`
const Image = styled.img`
   width: calc(33.33% - 1em);
   background-color: ${colors.white};
   padding: 0.5em;   
   margin: 0 1.5em 0 0;
   ${mediaQueries.mobile} {
      width: 50%;
   }
   ${mediaQueries.iphone7} {
      width: 100%;
   }
`

const Button = styled.button`
   margin: 3em auto;
   display: block;
   padding: 0 4em;
   font-size: 1.5em;
   background: ${colors.blue};
   color: ${colors.white};
   &:hover{
      background: ${colors.lightblue}
   }
   transition: background 0.5s ease-in-out;
`

