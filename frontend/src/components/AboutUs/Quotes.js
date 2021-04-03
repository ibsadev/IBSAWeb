import React from 'react';
import styled from 'styled-components';
import { contents } from '../../shared/Quotes_content'
import { colors, fonts, mediaQueries } from '../../shared/config'

const Container = styled.div`
   margin: 0;
`;

const Row = styled.div`
   background-color: ${colors.blue};
   padding: 2em 0;
   display: grid;
   grid-template-columns: 1fr 1fr;
   ${mediaQueries.mobile} {
      grid-template-columns: 1fr;
   }
`;

const QuotesContainer = styled.div`
   margin: 3em 3em;
   color: ${colors.white};
   font-family: ${fonts.text}, sans-serif;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   ${mediaQueries.mobile} {
      margin: 2em;
   }
`;


const QuotesParagraph = styled.h3`
   font-weight: 800;
   margin-bottom:0.5em;
   line-height: 1.25em;
   ${mediaQueries.iphone7} {
      text-align: left;
   }
`;

const CreatorParagraph = styled.h5`
   font-weight:300;
`;

//TODO : change the font size for quotes
export default function Quotes() {
   return (
      <Container className="container-fluid">
         <Row className="row">
            {contents.map(content => 
               <QuotesContainer>
                  <QuotesParagraph className="heading"> "{content.quote}" </QuotesParagraph>
                  <CreatorParagraph> - {content.creator}</CreatorParagraph>
               </QuotesContainer>
            )}
         </Row>
      </Container>
   )
}
