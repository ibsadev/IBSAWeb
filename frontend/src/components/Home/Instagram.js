import React, { Component} from 'react';
import styled from 'styled-components';

import { mediaQueries } from '../../shared/config'


const Container = styled.div`
   position: relative;
   text-align: center;
   margin-top: 5em;
   width: 80%;
   margin: auto;
   padding-bottom: 3em;

   ${mediaQueries.mobile} {
    width:100%;
    margin: auto;
   }
`;

const Heading = styled.h1`
    margin-top: 1.5em;
    font-size: 3em;
    font-weight: 800;
    ${mediaQueries.mobile} {
        font-size: 2.25em;
        margin-left: 0.75em;
        margin-right: 0.75em;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
`;

const InstagramImage = styled.img`
    position: relative;
    margin: 5px;
    height: 25vw;
    width: 25vw;

    ${mediaQueries.iphone7} {
        width: 70%;
        height: auto;
    }
`;

const InstagramLink = styled.a`
    z-index: 1;
`;

export default class Instagram extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


    render() {
        let { images } = this.props;
        let { width } = this.state;
        const imgList = images.filter(function(img, i) {
            if((img.media_type !== "IMAGE" && img.media_type !== "CAROUSEL_ALBUM") || (i > (width <= 480 ? 5 : 11))) {
                return false;
            }
            return true;
        }).map((item, i) => (
            <div className="square" key={i}>
                <InstagramLink href={ item.permalink }><InstagramImage id="insta-image" src={ item.media_url }></InstagramImage></InstagramLink>
            </div>
        ));
    
        return (
            <Container id="instagram">
                <Heading className="heading">FOLLOW US ON INSTAGRAM!</Heading>
                <ImageContainer className="igImages">{ imgList }</ImageContainer>
            </Container>
        );
      }
}