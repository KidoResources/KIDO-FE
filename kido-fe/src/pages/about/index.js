import React from "react";
import {
  Container,
  Div,
  Intro,
  StyledButton,
  Title,
  HeroImage,
  TName,
  TeamDiv,
  Timg,
  Tinfo,
} from "./aboutElement";

export default function About() {
  return (
    <Container>
      <Title>
        <h1>About Our Team</h1>
      </Title>
      <Intro>
        <Div>
          <p>
            Our Team is everything you have been Asking for and More. We Thrive
            to ensure that the community stays connected and helps build our
            small business and show people opportunities they never knew. If you
            know of opportunities and Companies you would love us to partner
            with. Click the Button Below! existed.
          </p>
          <StyledButton>Contact Us</StyledButton>
        </Div>
        <HeroImage src="./images/WorkTogether.svg" />
      </Intro>
      <TeamDiv>
        <TName>Christwide Oscar</TName>
        <TeamDiv>
          <Tinfo>BLAH BLAH</Tinfo>
          <Timg src="./images/Profile.svg" />
        </TeamDiv>
      </TeamDiv>
    </Container>
  );
}
