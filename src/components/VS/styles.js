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
  &:hover {
    cursor: default;
  }

  &::before {
    content: "";
    position: absolute;
    background: ${(props) => props.isMoving || "white"};

    border-radius: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    top: 100%;
    z-index: -1;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
  }
  ${(props) =>
    props.isMoving &&
    `
    color: whitesmoke;
     &:before {
       opacity: 1;
      top: 0;
    }
  `};
`;
