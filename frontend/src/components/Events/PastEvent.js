import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {mediaQueries,colors} from '../../shared/config'
import {HorizontalLine, Heading} from '../../shared/sharedStyles'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

   const setSliderSettings = (numImages) => {
      const sliderSettings = {
         infinite: true,
         slidesToScroll: 1,
         centerMode: true,
         responsive: [
            {
               breakpoint: 700,
               settings: {
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
               }
            }
         ]
      }
      if (numImages < 3) {
         sliderSettings.slidesToShow = 2;
      } else {
         sliderSettings.slidesToShow = 3;
      }
      return sliderSettings;
   }

   const sliderSettings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
         {
            breakpoint: 700,
            settings: {
               infinite: true,
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
            }
         }
      ]
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
               {/* <ImageSlide
                  justifyContent = {block.images.length < 3 ? "center" : "flex-start"}
                  justifyContentTablet = {block.images.length < 3 ? "center" : "flex-start"}
               >
                  {block.images.map((image, id) => 
                     <Image src={image} key={id} className="img-fluid" />
                  )}
               </ImageSlide> */}
               <Slider {...setSliderSettings(block.images.length)}>
                  {block.images.map((image, id) => 
                     <ImageContainer> 
                        <Image src={image} className="img-fluid"/>
                     </ImageContainer>
                  )}
               </Slider>
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
   margin-bottom: 1em;
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
   padding: 3em;
   background-color: ${colors.blue};
   width: 85%; 
   ${mediaQueries.tablet} {
      width: 90%;
      padding: 3em;
   }
   ${mediaQueries.mobile} {
      width: 100%;
      padding: 1.25em;
   }
`;

const ImageContainer = styled.div`
   padding: 0 0.5em;   
`

const Image = styled.img`
   background-color: ${colors.white};
   padding: 0.5em; 
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

