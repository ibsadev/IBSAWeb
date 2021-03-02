import React, { Component } from 'react'
import styled from 'styled-components'
import {colors, mediaQueries} from '../../shared/config'

const Container = styled.div`
   margin: 2em auto 0 auto;
   width: 85%;
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
   background-color: ${colors.lightblue};
   box-sizing: content-box;
   padding: 2em 0;
   ${mediaQueries.mobile} {
      top: 0px;
      right: 0px;
      width: 100%;
      background-color: rgba(0,0,0,0.3);
      padding: 0;
   }
`

const Content = styled.div`
   
`

const Image = styled.img`
   width: 45%;
   margin-right: -4em;
   z-index: 1;
   box-shadow: 10px 10px 20px;
   ${mediaQueries.mobile} {
      position: absolute;
      width: 100%;
      z-index: -1;
      margin-right: 0;
   }
`;

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

   render() {
      const {upcomingEvents} = this.props;
      return(
         <Container>
            {upcomingEvents.length === 0 
               ? <div>
                  Check back later for more exciting events!
               </div>
               :
               
               <InsideContainer>
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
                  >
                  </Image>
                  <TextBox 
                     height={this.state.imgHeight}
                     width={this.state.imgWidth}>
                     <Content>
                        
                     </Content>
                  </TextBox>
               </InsideContainer>
            }
         </Container>
      )
   }
}
