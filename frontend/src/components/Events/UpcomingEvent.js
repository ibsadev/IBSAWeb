import React, { Component } from 'react'
import styled from 'styled-components'
import {colors, mediaQueries, monthFormat} from '../../shared/config'

const Container = styled.div`
   margin: 2em auto 3em auto;
   width: 75%;
   ${mediaQueries.tablet} {
      width: 90%;
   }
   ${mediaQueries.mobile} {
      width: 95%;
   }
   ${mediaQueries.iphone7} {
      width: 100%;
   }
`;

const InsideContainer= styled.div`
   position: relative;
   display:flex;
   align-items: center;
   justify-content: center;
`

const TextBox = styled.div`
   width: 55%;
   /* height: ${props => `${props.height}px`}; */
   background-color: ${colors.blue};
   box-sizing: content-box;
   /* display: flex; */
   z-index: 100;
   /* flex-direction: column; */
   /* align-items: stretch; */
   padding: 3em 0;
   ${mediaQueries.mobile} {
      height: ${props => `${props.height}px`};
      top: 0px;
      right: 0px;
      width: 100%;
      z-index: 100;
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
   align-items: flex-start;
   justify-content: space-between;
   ${mediaQueries.mobile} {
      margin: 1em;
      padding-left: 0;
      align-items: center;
      color: white;
   }
`

const ImageContainer = styled.a`
   color: black;
   width: 45%;
   margin-right: -3em;
   z-index: 1;
   box-shadow: 10px 10px 20px;
   ${mediaQueries.mobile} {
      position: absolute;
      width: 100%;
      margin-right: 0;
   }
`;

const Button = styled.button`
   height: 100%;
   background-color: ${colors.lightblue};
   padding: 0.5em 1.5em;
   font-size: 1.2em;
   &:hover {
      background-color: ${colors.white};
      color:black; }
   ${mediaQueries.mobile} {
      padding: 0.75em; }
`

const Heading = styled.h2`
   font-weight: 800;
   color: white;
   margin-bottom: 0.5em;
   text-align: left;
`

const Description = styled.h6`
   font-weight: 300;
   color: white;
   text-align: left;
   margin-bottom: 1em;
`

const EventDate = styled.h5`
   font-weight: 400;
   color: white;
   margin-bottom: 1em;
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
      this.setState({ imgHeight: this.imgref.current.clientHeight })
   }


   formatDate(inputDate) {
      let date = inputDate.getDate();
      let month = inputDate.getMonth();
      let monthText = monthFormat[month]
      let year = inputDate.getFullYear();
      return `${monthText} ${date} ${year}`
   }

   render() {
      const {upcomingEvents} = this.props;
      let date;
      let formattedDate;
      if (upcomingEvents[0]["startTime"]) {
         let temp = upcomingEvents[0].startTime;
         date = new Date(temp);
         console.log(date)
         formattedDate = this.formatDate(date)
      }
      return(
         <Container>
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
                        <Heading className="heading">{upcomingEvents[0].title}</Heading>
                        <Description>{upcomingEvents[0].description}</Description>
                        <EventDate>{formattedDate}</EventDate>
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
