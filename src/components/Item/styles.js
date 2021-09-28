import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`

0%{
  transform: translateX(0)
}
100%{
  transform: translateX(-50vw)
}
/* 100%{
  transform: translateX(0)
} */


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
  /* transition: 1s; */
  /* transform: ${(props) =>
    props.left ? `translateX(-50vw)` : `translateX(0)`} */
  ${(props) =>
    props.left &&
    css`
      animation: ${slideIn} 1.2s ease infinite;
    `}
`;

export const CodeContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
  /* background: darkblue; */
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
`;
