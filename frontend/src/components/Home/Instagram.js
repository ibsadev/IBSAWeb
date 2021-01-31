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
    width:90%;
    margin: auto;
   }

   ${mediaQueries.tablet} {

   }
`;

const Heading = styled.h1`
    margin-top: 1.5em;
    font-weight: bold;
    
    ${mediaQueries.mobile} {
        font-size: 2em;
    }
`;

export default class Instagram extends Component {

    render() {
        let { images } = this.props
        const imgList = images.filter(function(img, i) {
            if((img.media_type != "IMAGE" && img.media_type != "CAROUSEL_ALBUM") || (i > 12)) {
                return false;
            }
            return true;
        }).map((item, i) => (
            <div className="square" key={i}>
                <a href={ item.permalink }><img src={ item.media_url }></img></a>
            </div>
        ));
    
        return (
            <div id="instagram">
                <Heading>FOLLOW US ON INSTAGRAM!</Heading>
                <div className="igImages">{ imgList }</div>
            </div>
        );
    }
}