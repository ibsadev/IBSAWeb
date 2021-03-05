import React, { Component } from 'react'
import styled from 'styled-components'
import {colors, mediaQueries} from '../../shared/config'

const Container = styled.div`
   margin: 2em auto 0 auto;
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
   height: ${props => `${props.height}px`};
   background-color: ${colors.blue};
   box-sizing: content-box;
   padding: 3em 0;
   ${mediaQueries.mobile} {
      top: 0px;
      right: 0px;
      width: 100%;
      z-index: 100;
      background-color: rgba(0,0,0,0.5);
      padding: 0;
   }
`

const Content = styled.div`
   margin-left: 4em;
   margin-right: 2em;
   padding-left: 2em;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   place-content: space-between;
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
   margin-right: -4em;
   z-index: 1;
   box-shadow: 10px 10px 20px;
   ${mediaQueries.mobile} {
      position: absolute;
      width: 100%;
      margin-right: 0;
   }
`;

const Image = styled.img`
   z-index: 1;
`

const Button = styled.button`
   height: 100%;
   background-color: ${colors.lightblue};

   &:hover {
      background-color: ${colors.lightblue};
      color:black;
   }

   ${mediaQueries.mobile} {
      padding: 0.75em;
   }
`

export default class UpcomingEvent extends Component {
   constructor() {
      super();
      this.imgref = React.createRef();
      this.state = {
         imgHeight : 0,
         imgWidth: 0,
      }
      this.updateHeight = this.updateHeight.bind(this);
   }

   componentDidMount() {
      window.addEventListener("resize", this.updateHeight);
    }
   
   componentWillUnmount() {
      window.removeEventListener("resize", this.updateHeight);
    }

   updateHeight() {
      this.setState({ imgHeight: this.imgref.current.clientHeight })
   }

   formatDate(inputDate) {
      let date = inputDate.getDate();
      let month = inputDate.getMonth();
      let year = inputDate.getFullYear();
      return `${month} ${date} ${year}`
   }

   render() {
      const {upcomingEvents} = this.props;
      let date;
      let formattedDate;
      // if (upcomingEvents[0]["startTime"] !== undefined) {
      //    let temp = upcomingEvents[0].startTime;
      //    date = new Date(temp);
      //    formattedDate = this.formatDate(date)
      // }
      return(
         <Container>
            {upcomingEvents.length === 0 
               ? <div>
                  Check back later for more exciting events!
               </div>
               :
               
               <InsideContainer>
                  <ImageContainer href={upcomingEvents[0].instagramImageLink}>
                     <Image
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
                     height={this.state.imgHeight}
                     width={this.state.imgWidth}>
                     <Content>
                        <h2>{upcomingEvents[0].title}</h2>
                        <p>{upcomingEvents[0].description}</p>
                        <p>
                           {formattedDate}
                        </p>
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
