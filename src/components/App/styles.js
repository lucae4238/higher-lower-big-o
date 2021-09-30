import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin: auto;
  display: flex;
  @media(max-width: 900px){
    flex-direction: column;
  }
`;
export const ScoreSpan = styled.span`
  position: absolute;
  bottom: 3%;
  right: 2%;
  font-size: 25px;
  @media(max-width: 900px) {
  bottom: 1%;
  }
  @media(max-width: 450px){
    top: 50%;
    left:75%;
    opacity: ${props => props.isMoving ? "0" : "1"};
    transition: opacity 0.5s ease;
  }
`;
