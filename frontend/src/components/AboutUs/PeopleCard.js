import React, {Component} from 'react'
import styled from 'styled-components'
import {mediaQueries, colors} from '../../shared/config'
import ReactCardFlip from 'react-card-flip'

import overlay from '../../images/overlay.png'

const FrontContainer = styled.div`
   box-shadow: 15px 15px 30px;
   background-color: white;
   border-radius:1em;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   ${mediaQueries.tablet} {
      box-shadow: 7.5px 7.5px 3.725px;
   }
`

const BackContainer = styled.div`
   box-shadow: 10px 10px 5px;
   border-radius:1em;
   height: ${props => `${props.cardHeight}px`};
   background-image:  url(${props => props.overlay}), url(${props => props.imgURL});
   background-position: center top;
   background-size: cover;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   ${mediaQueries.tablet} {
      box-shadow: 7.5px 7.5px 3.725px;
   }
`

const Image = styled.img`
   border-top-left-radius: 1em;
   border-top-right-radius: 1em;
   border-bottom: 1px solid black; 
`;

const Description = styled.div`
   text-align: center;
   margin: 1em 0.5em;
`;

const Name = styled.h2`
   font-weight: 800;
   font-size: 1.5em;
   margin-bottom: 0;
`;

const Title = styled.h4`
   font-weight: 300;
   font-size: 1.3em;
`

const Button = styled.button`
   border-radius:1em;
   margin-bottom: ${props => props.side === "front" ? "1em" : "0"};
   margin-top: ${props => props.side === "back" ? "1em" : "0"};
   cursor: pointer;
   height: 3em;
   background-color: ${colors.blue};
   &:hover{
      background-color: ${colors.lightblue};
   }
   ${mediaQueries.iphone7} {
      padding: 0.5em 2em;
   }
`;

const Summary = styled.p`
   margin: 1em 2.5em;
   font-weight: 500;
   text-align: center;
   color: ${colors.white};
   ${mediaQueries.mobile} {
      margin: 1em;
   }
`;

const Bio = styled.p`
   font-size: 1.2em;
   ${mediaQueries.mobile} {
      font-size: 1em;
   }
`

const SocialMedia = styled.div`
   width: 35%;
   margin: 0 auto;
   display: flex;
   justify-content: space-around;
`

const SocialMediaLink = styled.a`
   color: white;
   font-size: 36px;
   text-decoration: none;
`

export default class PeopleCard extends Component {
   constructor() {
      super();
      this.imgref = React.createRef();
      this.frontContainer = React.createRef();;
      this.state = {
         isFlipped: false,
         cardHeight : 0,
      };
      this.handleClick = this.handleClick.bind(this);
      this.updateHeight = this.updateHeight.bind(this);
   }
   
   /**
    * handles the flip card animation for people card
    */
   handleClick(e) {
      e.preventDefault();
      console.log("clicked")
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
   }

   componentDidMount() {
      this.updateHeight();
      window.addEventListener("resize", this.updateHeight);
   }

   componentWillUnmount() {
      window.removeEventListener("resize", this.updateHeight);
   }

   /**
    * updateHeight() updates the height of the container for the front side
    * of the car whenever it's changed. The height is then used for BackContainer
    * to have reference to (passed in as a prop), so that size is consistent
    */
   updateHeight() {
      this.setState({ cardHeight: this.frontContainer.current.clientHeight })
   }

   render() {
      const {imgURL, name, title, bio, instalink, lilink} = this.props;
      const {cardHeight} = this.state;
      return (
         <ReactCardFlip 
            className="card-container"
            isFlipped={this.state.isFlipped} 
            flipDirection="horizontal"
            infinite="true"
         >
            <FrontContainer ref={this.frontContainer} 
            id="get-height">
               <Image 
                  src={imgURL} 
                  ref={this.imgref}
                  onLoad={() => {
                     if (cardHeight < 400) {
                        this.setState({
                           cardHeight: cardHeight + this.imgref.current.clientHeight
                        })
                     }
                  }}
                  className="img-fluid"
               />
               <Description >
                  <Name className="heading"> {name} </Name>
                  <Title> {title} </Title>
               </Description>
               <Button side="front" onClick={this.handleClick}> Learn more </Button>
            </FrontContainer>
            <BackContainer 
               cardHeight={cardHeight}
               overlay={overlay}
               imgURL={imgURL}
            >
               <Summary>
                  <Bio> {bio} </Bio>
                  <SocialMedia> 
                     <SocialMediaLink href={instalink} className="icon fa-instagram"> </SocialMediaLink>
                     <SocialMediaLink href={lilink}  className="icon fa-linkedin-square"> </SocialMediaLink>
                  </SocialMedia>
               </Summary>
               <Button side="back" onClick={this.handleClick}>Back</Button>
            </BackContainer>
         </ReactCardFlip>
         
      )
   }
}
