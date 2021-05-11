import React, { Component} from 'react';
import styled from 'styled-components';

import { mediaQueries} from '../../shared/config'
import {HorizontalLine, Heading} from '../../shared/sharedStyles'


const Container = styled.div`
   position: relative;
   text-align: center;
   margin-top: 5em;
   padding-bottom: 3em;
`;

const InsideContainer = styled.div`
    width: 80%;
    text-align: center;
    margin: auto;
    ${mediaQueries.mobile}{
        width: 100%;
    }
`

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
        width: 75%;
        height: auto;
    }
`;

const InstagramLink = styled.a`
    z-index: 1;
`;

const ModifiedHeading = styled(Heading)`
    ${mediaQueries.mobile} {
        padding: 0;
    }
`

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
                <ModifiedHeading>FOLLOW OUR INSTAGRAM!</ModifiedHeading>
                <HorizontalLine />
                <InsideContainer>
                    <ImageContainer   ImageContainer className="igImages">{ imgList }</ImageContainer>
                </InsideContainer> 
            </Container>
        );
      }
}