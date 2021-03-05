import React, {Component} from 'react'
import styled from 'styled-components'
import {mediaQueries, colors} from '../../shared/config'
import ReactCardFlip from 'react-card-flip'

// width change for officers in about us
const FrontContainer = styled.div`
   box-shadow: 15px 15px 5px;
   /* border : 4px solid black; */
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
   background-color: ${colors.blue};
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
   font-weight: 600;
   font-size: 2em;
   margin-bottom: 0;
`;

const Title = styled.h6`

`

const Button = styled.button`
   border-radius:1em;
   margin-bottom: ${props => props.side === "front" ? "1em" : "0"};
   margin-top: ${props => props.side === "back" ? "1em" : "0"};
   cursor: pointer;
   height: 3em;
   background-color: ${colors.blue};
`;

const Summary = styled.p`
   margin: 1em 2.5em;
   font-weight: 400;
   text-align: justify;
   color: ${colors.white};
   font-weight: 400;
`;

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
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    componentDidMount() {
      this.updateHeight();
      window.addEventListener("resize", this.updateHeight);
    }
   
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateHeight);
    }

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
                  <Title className="subheading"> {title} </Title>
               </Description>
               <Button side="front" onClick={this.handleClick}> Learn more </Button>
            </FrontContainer>
            <BackContainer cardHeight={cardHeight}>
               <Summary>
                  {bio}
               </Summary>
               <Button side="back" onClick={this.handleClick}>Back</Button>
            </BackContainer>
         </ReactCardFlip>
         
      )
   }
}
