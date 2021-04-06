import React, {useState} from 'react'
import styled from 'styled-components';
import {mediaQueries,colors} from '../../shared/config'
import {HorizontalLine, Heading} from '../../shared/sharedStyles'

const Container = styled.div`
   padding-bottom: 2em;
`

const Title= styled.h2`
   color: ${colors.white};
   margin-bottom: 1.5em;
   font-size: 2.5em;
   text-transform: uppercase;
   text-align: center;
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

export default function PastEvent(props) {
   let {pastEvents} = props;

   const maxEvents = pastEvents.length;

   const [shownEvents, setShownEvents] = useState(3);

   const handleLoadMore = () => {
      setShownEvents(prevShownEvents => {
         return prevShownEvents + 3 >= maxEvents ? maxEvents : prevShownEvents + 3;
      })
  }
   return (
      <Container>
         <Heading>PAST EVENTS</Heading>
         <HorizontalLine />
         {pastEvents && pastEvents.slice(0, shownEvents).map((block, index) => 
            <EventsContainer
               key = {index}
            >
               <Title className="heading">{block.title}</Title>
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
         <Button onClick={handleLoadMore}> LOAD MORE </Button>
      </Container>
   )
}

