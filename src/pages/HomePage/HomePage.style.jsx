import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding: 0.8rem;
`;

export const Temp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
  margin-right: 30px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;

    div {
      display: flex;
      /* justify-content: space-between; */
      align-items: center;
      & img {
        width: 130px;
        margin-right: 1rem;
      }
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 65%;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  /* color: var(--highlight); */

  /* border: 1px solid red; */

  & > div {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    color: var(--light);
    h1 {
      font-size: 8rem;
      font-weight: 400;
      margin: 0 30px;
    }
  }

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: brightness(0.4);
  }
`;
