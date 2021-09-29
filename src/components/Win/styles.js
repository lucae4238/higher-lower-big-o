import styled from "styled-components";
import { Button } from "../Item/Buttons/styles";

export const Container = styled.div`
  /* height: 100vh; */
  /* width: 100vw; */
  z-index: 100;

  position: absolute;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.57);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 30vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 8%;
    left: 35%;
    height: fit-content;
    padding: 15px;
    @media (max-width: 900px) {
      bottom: 35%;
      left: 68%;
    }
  }

  h1 {
    margin-top: 0;
  }
`;

export const CustomButton = styled(Button)`
  font-size: 18px;
  &:before {
    background: green;
  }
`;
