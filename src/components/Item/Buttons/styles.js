import styled from "styled-components";

export const Container = styled.div`
  display: ${props => props.isHidden ? "none" : "flex"};
  flex-direction: column;
  margin: auto;
  text-align: center;
  span {
    margin: 10px;
    font-size: larger;
    &:hover {
      cursor: default;
    }
  }
`;

export const Button = styled.button`
  margin: 1rem;
  padding: 20px;
  border-radius: 14%;
  width: 200px;
  width: 12.5rem;
  padding: 0.625rem;
  border-radius: 2.5rem;

  margin: 0 10px 10px;
  position: relative;
  border: 0.125rem solid #fff;
  -webkit-box-shadow: 0 0.9375rem 2.5rem 0 rgb(0 0 0 / 10%);
  box-shadow: 0 0.9375rem 2.5rem 0 rgb(0 0 0 / 10%);
  outline: 0;
  background: transparent no-repeat 0 0;
  font-weight: 700;
  -webkit-touch-callout: none;

  border-color: black;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;
