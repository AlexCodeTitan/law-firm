import React from "react";
import image from "../../assets/statue.jpg";
import {
  AboutWrapper,
  ImageWrapper,
  SectionContainer,
} from "./AboutPage.style";

function AboutPage() {
  return (
    <AboutWrapper>
      <ImageWrapper>
        <img src={image} alt="" />
      </ImageWrapper>
      <SectionContainer>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
      </SectionContainer>
    </AboutWrapper>
  );
}

export default AboutPage;
