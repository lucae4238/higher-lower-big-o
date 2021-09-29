import styled from "styled-components";
import { CustomButton, Container } from "../Lost/styles";

export const CustomContainer = styled(Container)`
  height: 100%;
  width: 100%;
  font-size: 25px;
  font-weight: normal;
  line-height: 1.5;
  p {
    margin: 15px;
  }
  display: flex;
  div {
    position: initial;
    top: 28%;
    padding: 1rem;
    height: fit-content;
    position: absolute; /* Important */
    top: 50%; /* Position Y halfway in */
    left: 50%; /* Position X halfway in */
    transform: translate(-50%, -50%); /* Move it halfway back(x,y) */
  }

  @media (max-width: 1000px) {
    div {
      width: 80vw;
    }
  }
  @media (max-width: 500px) {
    div {
      height: 70vh;
    }
  }
`;

export const Button = styled(CustomButton)`
  margin-top: 20px;
  height: 50px;
  text-align: center;
`;

export const About = styled.div`
  position: absolute;
  bottom: 2%;
  left: 3%;
  height: 50px;
  z-index: 1001;
  &:hover {
    cursor: pointer;
  }

  img {
    height: 100%;
  }
`;
