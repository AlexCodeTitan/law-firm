import React from "react";
import { HomeWrapper, ImageContainer, Temp } from "./HomePage.style";
import picture from "../../assets/buildings-2.jpg";
import logo from "../../assets/ConcordiaLegal3.png";

function HomePage() {
  return (
    <HomeWrapper>
      <Temp>
        <div>
          <div>
            <img src={logo} alt="" />
            <h2>Building Harmony Through Law</h2>
          </div>
          <p>
            At Concordia Legal, we provide expert legal representation to
            clients in a variety of practice areas, including personal injury,
            family law, and business litigation. With years of experience and a
            commitment to achieving the best possible outcomes for our clients,
            we have earned a reputation as a trusted and reliable law firm.
          </p>
        </div>
        <span>1234 Harmony Boulevard, Suite 500 Concordia Tower City</span>
      </Temp>
      <ImageContainer>
        <div>
          <h1>Concordia Legal</h1>
        </div>

        <img src={picture} alt="" />
      </ImageContainer>
    </HomeWrapper>
  );
}

export default HomePage;
