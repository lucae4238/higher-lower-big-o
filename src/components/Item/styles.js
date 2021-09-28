import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: calc(50vw - 2px);
  border: 1px solid black;
  border-top: none;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CodeContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
  background: darkblue;
`;

export const Answer = styled.div`
  background: red;
  height: 60vh;
  position: absolute;
  top: 4%;
  width: 95%;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
`;
