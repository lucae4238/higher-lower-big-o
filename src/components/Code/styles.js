import styled from "styled-components";

export const Container = styled.div`
  font-family: Fira Code;
  width: 46vw;
  margin: 10px;
  overflow: scroll;
  max-height: 65vh;

  @media(max-width:900px ){
    width: 80vw;
    max-height: 30vh
  }
`;
