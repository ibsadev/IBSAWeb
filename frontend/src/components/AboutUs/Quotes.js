import React from 'react';
import styled from 'styled-components';
import { contents } from './Quotes_content'
import { colors, mediaQueries, fonts } from '../../shared/config'

const Container = styled.div`
   margin: 0;
`;

const Row = styled.div`
   background-color: ${colors.blue};
   align-items: center;
`;

const QuotesContainer = styled.div`
   margin: 6em 3em;
   color: ${colors.white};
   font-family: ${fonts.text}, sans-serif;
`;

const QuotesParagraph = styled.p`
   font-size: 2em;
   font-weight: 800;
   font-style: bold;
   margin-bottom:1em;
`;

const CreatorParagraph = styled.p`
   font-weight:200;
   font-size:16px;
`;

export default function Quotes() {
   return (
      <Container className="container-fluid">
         <Row className="row">
            {contents.map(content => 
               <QuotesContainer className="col-md my-5">
                  <QuotesParagraph> "{content.quote}" </QuotesParagraph>
                  <CreatorParagraph> - {content.creator}</CreatorParagraph>
               </QuotesContainer>
            )}
         </Row>
      </Container>
   )
}
