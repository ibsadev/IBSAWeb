import React, { Component} from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../shared/config'

import PastEventCarousel from './PastEventCarousel'

const Container = styled.div`
    width: 90%;
    margin: 1em auto;
    ${mediaQueries.mobile} {
        width: 80%;
    }
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const CarouselContainer = styled.div`
    margin-bottom: 2em;
    margin-top: 1em;
    width: 25%;
    position: relative;
    box-shadow : 10px 10px 5px;

    ${mediaQueries.iphone7} {
        width: 90% !important;
    }

    ${mediaQueries.tablet} {
        width: 40%;
    }
`

export default class PastEventSection extends Component {
    render() {
        let {pastEvents} = this.props;
        return (
            <Container>
            {pastEvents.map((block, index) => 
                <CarouselContainer>
                    <PastEventCarousel content={block.images} />
                </CarouselContainer>
            )}
            </Container>
        );
    }
}