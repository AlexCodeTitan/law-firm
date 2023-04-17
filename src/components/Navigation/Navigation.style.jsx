import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  width: 60%;
  height: 50px;
  position: absolute;
  top: 0.8rem;
  right: 2rem;
  z-index: 10;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
  }

  & > a:last-of-type {
    text-decoration: underline;
  }
`;
