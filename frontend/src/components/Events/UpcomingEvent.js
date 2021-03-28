import React, { Component } from 'react'
import styled from 'styled-components'
import {colors, mediaQueries} from '../../shared/config'
import {Heading, HorizontalLine} from '../../shared/sharedStyles'

const Container = styled.div`
   margin: 0 auto;
   height: 100vh;
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   ${mediaQueries.mobile} {
      height: 110vh;
   }
`;

const InsideContainer= styled.div`
   width: 75%;
   position: relative;
   margin-top: 5em;
   display:flex;
   align-items: center;
   justify-content: center;
   ${mediaQueries.tablet} {
      width: 90%;
      margin-top: 3em;
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
      overflow-x: hidden;
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

export default class UpcomingEvent extends Component {
   constructor() {
      super();
      this.imgref = React.createRef();
      this.state = {
         imgHeight : 0,
      }
      this.updateHeight = this.updateHeight.bind(this);
   }

   componentDidMount() {
      window.addEventListener("resize", this.updateHeight);
    }
   
   componentWillUnmount() {
      window.removeEventListener("resize", this.updateHeight);
    }
   
    /** updateHeight() is used to get reference for the height for the image,
     * so that the textbox's size can be consistent with the image on mobile view
     */
   updateHeight() {
      this.setState({ imgHeight: this.imgref.current !== null ? this.imgref.current.clientHeight : 0 })
   }

   render() {
      const {upcomingEvents} = this.props;
      return(
         <Container>
            <Heading>UPCOMING EVENTS</Heading>
            <HorizontalLine />
            {upcomingEvents.length === 0 
               ? <div>
                  Check back later for more exciting events!
               </div>
               :
               <InsideContainer>
                  <ImageContainer href={upcomingEvents[0].instagramImageLink}>
                     <img
                        src={upcomingEvents[0].imageURL} 
                        className="img-fluid"
                        alt="events-banner"
                        ref={this.imgref}
                        onLoad={() => {
                           this.setState({
                              imgHeight : this.imgref.current.clientHeight,
                              imgWidth : this.imgref.current.clientWidth
                           })
                        }}
                     />
                  </ImageContainer>
                  <TextBox 
                     height={this.state.imgHeight} >
                     <Content>
                        <Title className="heading">{upcomingEvents[0].title}</Title>
                        <Description>{upcomingEvents[0].description}</Description>
                        {/* <EventDate>{formattedDate}</EventDate> */}
                        <a href={upcomingEvents[0].formLink}>
                           <Button> SIGN UP! </Button>
                        </a>
                     </Content>
                  </TextBox>
               </InsideContainer>
            }
         </Container>
      )
   }
}
