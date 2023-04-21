import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 1.6rem);
`;

export const ImageWrapper = styled.div`
  height: 100%;
  width: 30%;
  border-radius: 10px;
  overflow: hidden;

  & img {
    height: 100%;
    width: 100%;
  }
`;

export const SectionContainer = styled.div`
  height: 100%;
  width: 70%;
  border: 1px solid red;
`;
