import styled, { css, keyframes } from "styled-components";

const slideInVertical = keyframes`

0%{
  transform: translateY(0)
}
100%{
  transform: translateY(-50vh)
}

`;
const slideInHorizontal = keyframes`

0%{
  transform: translateX(0)
}
100%{
  transform: translateX(-50vw)
}

`;

export const Container = styled.div`
  height: 100vh;
  width: calc(50vw - 2px);
  border: 1px solid black;
  border-top: none;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    props.left &&
    css`
      animation: ${slideInHorizontal} 1.2s ease infinite;

      @media (max-width: 900px) {
        animation: ${slideInVertical} 1.3s ease infinite;
      }
    `}

  @media(max-width: 900px) {
    height: calc(50vh - 2px);
    width: 100vw;
    border: 1px solid black;
    border-width: 1px 0px;
  }
`;

export const CodeContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
  /* background: darkblue; */
  @media (max-width: 900px) {
    height: 33vh;
  }
`;

export const Answer = styled.div`
  height: 25vh;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;

  box-shadow: 0 1rem 1.5rem 1rem rgb(0 0 0 / 10%);
  outline: 0;
  background: transparent no-repeat 0 0;
  /* background: none; */
  font-family: "Fira Code", monospace;
  @media (max-width: 900px) {
    height: 15%;
    height: calc(17vh - 2px);
    width: 65%;
    margin: 15px;
    padding: 15px;
  }
  @media (max-width: 450px) {
    width: 80vw;
    font-size: 45px;
  }
`;
