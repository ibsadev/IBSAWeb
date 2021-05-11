import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios';

import {colors, mediaQueries} from '../../shared/config'
import {Heading, HorizontalLine} from '../../shared/sharedStyles'

import NoEvents from "../../images/No_events.png"

// component declaration
const UpcomingEvent = () => {
   const [upcomingEvents, setUpcomingEvents] = useState([])
   const [imgHeight, setImgHeight] = useState(0)
   const imgref = useRef(null)

   const updateHeight = () => {
      setImgHeight(prevState => prevState = imgref.current !== null ? imgref.current.clientHeight : 0 )
   }

   useEffect(() => {
      async function getUpcomingEvents() {
        let res = await axios.get('http://ibsa-deployment.herokuapp.com/api/instagram/upcomingevents');
        let data = res.data;
        setUpcomingEvents(data);
      }
      getUpcomingEvents();
      updateHeight();
    }, [])

    return(
      <Container>
         <Heading>UPCOMING EVENTS</Heading>
         <HorizontalLine />
         
         {upcomingEvents.length === 0 
            ? 
               <NoEventsImage src={NoEvents} className="img-fluid" />
            : 
            <InsideContainer>
               <ImageContainer href={`https://${upcomingEvents[0].instagramImageLink}`} target="_blank">
                  <img
                     src={upcomingEvents[0].imageURL} 
                     className="img-fluid"
                     alt="events-banner"
                     ref={imgref}
                     onLoad={() => {
                        setImgHeight(imgref.current.clientHeight)
                     }}
                  />
               </ImageContainer>
               <TextBox 
                  height={imgHeight} >
                  <Content>
                     <Title className="heading">{upcomingEvents[0].title}</Title>
                     <Description>{upcomingEvents[0].description}</Description>
                     {/* <EventDate>{formattedDate}</EventDate> */}
                     <a href={`https://${upcomingEvents[0].formLink}`} target="_blank">
                        <Button> SIGN UP! </Button>
                     </a>
                  </Content>
               </TextBox>
            </InsideContainer> 

         }
      </Container>
   )

}

// styled components declaration

const Container = styled.div`
   margin: 0 auto;
   height: 100vh;
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   ${mediaQueries.tablet} {
      height: 70vh;
   }
   ${mediaQueries.mobile} {
      height: 90vh;
   }
`;

const NoEventsImage = styled.img`
   width: 40%;
   margin-bottom: 5em;
   ${mediaQueries.tablet} {
      width: 70%;
   }
   ${mediaQueries.mobile} {
      width: 100%;
      margin-bottom: 0em;
   }
`

const InsideContainer= styled.div`
   width: 75%;
   position: relative;
   margin-top: 5em;
   display:flex;
   align-items: center;
   justify-content: center;
   ${mediaQueries.tablet} {
      width: 90%;
      margin-top: 0em;
   }
   ${mediaQueries.mobile} {
      overflow-x: hidden;
      width: 100%;
   }
`

const TextBox = styled.div`
   width: 55%;
   background-color: ${colors.blue};
   box-sizing: content-box;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 100;
   padding: 3em 0;
   ${mediaQueries.mobile} {
      height: ${props => `${props.height}px`};
      top: 0px;
      right: 0px;
      width: 100%;
      z-index: 1;
      background-color: rgba(0,0,0,0.5);
      padding: 0;
   }
`

const Content = styled.div`
   margin: 0 3em;
   /* padding-left: 2em; */
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   ${mediaQueries.mobile} {
      margin: 3em;
      padding-left: 0;
      align-items: center;
      color: white;
   }
   ${mediaQueries.iphone7} {
      margin: 2em;
   }
`

const ImageContainer = styled.a`
   color: black;
   width: 45%;
   margin-right: -3em;
   box-shadow: 10px 10px 20px;
   ${mediaQueries.tablet} {
      margin-right: -1.5em;
   }
   ${mediaQueries.mobile} {
      position: absolute;
      width: 100%;
      overflow: visible;
      margin-right: 0;
   }
   ${mediaQueries.iphone7} {
      width: 125%;
   }
`;

const Button = styled.button`
   height: 100%;
   background-color: ${colors.lightblue};
   padding: 0.5em 1.5em;
   font-size: 1.2em;
   &:hover {
      background-color: white;
      color:${colors.lightblue}; }
   ${mediaQueries.mobile} {
      padding: 0.75em; }
`

const Title = styled.h2`
   font-weight: 800;
   color: white;
   margin-bottom: 0.5em;
   text-align: center;
`

const Description = styled.h6`
   font-weight: 300;
   color: white;
   text-align: left;
   line-height: 1.4em;
   margin-bottom: 2em;
   ${mediaQueries.mobile} {
      text-align: center;
   }
`
export default UpcomingEvent;
