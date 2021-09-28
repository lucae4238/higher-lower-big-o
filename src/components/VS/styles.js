import styled from "styled-components";

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  font-size: 45px;
  padding: 10px;
  z-index: 10;
  border-radius: 100%;
  &:hover{
    cursor: default; 
  }
`;
