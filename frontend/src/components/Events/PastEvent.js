import React, { Component} from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../shared/config'

import PastEventCarousel from './PastEventCarousel'

// make the drop shadow for past events to be identical to home page
const Container = styled.div`
    width: 92.5%;
    margin: 1em auto 0 auto;
    padding-bottom: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5em;
    row-gap: 2.5em;
    ${mediaQueries.tablet} {
        width: 85%;
        grid-template-columns: 1fr 1fr;
    }
    ${mediaQueries.mobile} {
        width: 80%;
        grid-template-columns: 1fr;
        row-gap: 1em;
    }
`;

const CarouselContainer = styled.div`
    margin-bottom: 2em;
    margin-top: 1em;
    position: relative;
    box-shadow : 10px 10px 5px;
    display: flex;
    flex-direction: column;
`

export default class PastEvent extends Component {
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