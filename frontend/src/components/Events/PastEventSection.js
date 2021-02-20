import React, { Component} from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../shared/config'

import PastEventCarousel from './PastEventCarousel'

const Container = styled.div`
    margin : 1em 4em;
    ${mediaQueries.mobile} {
        margin: 1.5em;
    }
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const CarouselContainer = styled.div`
    margin: 2em;
    width: 30%;
    position: relative;
    box-shadow : 10px 10px 5px;
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