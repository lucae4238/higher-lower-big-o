import styled from "styled-components";
import { CustomButton, Container } from "../Lost/styles";

export const CustomContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  font-size: 25px;
  font-weight: normal;
  line-height: 1.5;
  p {
    margin: 15px;
  }
  div {
    top: 28%;
    padding: 1rem;
    height: fit-content;
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
