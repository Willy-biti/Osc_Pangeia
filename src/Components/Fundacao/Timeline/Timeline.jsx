import React from 'react';
import {
  Container,
  Content,
  YearContainer,
  YearContent,
  YearDot,
  VerticalLine,
  Description
} from './Elements';
import events from './Items';

const TimeLine = () => {
  return (
    <Container>
      <Content>
        <VerticalLine />
        {events.map((event, index) => (
          <YearContainer key={event.year} isEven={index % 2 === 0}>
            {/* <YearDot>{event.year}</YearDot> */}
            <YearDot></YearDot>
            <YearContent isEven={index % 2 === 0}>
              <h3>{event.title}</h3>
              <Description>{event.description}</Description>
            </YearContent>
          </YearContainer>
        ))}
      </Content>
    </Container>
  );
};

export default TimeLine;
