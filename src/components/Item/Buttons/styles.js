import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
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
  font-size: 18px;

  margin: 0 10px 10px;
  position: relative;
  border: 0.125rem solid #fff;
  -webkit-box-shadow: 0 0.9375rem 2.5rem 0 rgb(0 0 0 / 10%);
  box-shadow: 0 0.9375rem 2.5rem 0 rgb(0 0 0 / 10%);
  outline: 0;
  background: transparent no-repeat 0 0;
  font-weight: 700;
  -webkit-touch-callout: none;
  overflow: hidden;
  border-color: black;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    border-radius: 16%;
    background: purple;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.09s ease-in;
    -webkit-transition: top 0.09s ease-in;
  }
  &:hover {
    color: whitesmoke;
    cursor: pointer;
    :before {
      top: 0;
    }
  }
  &:focus{
    outline: auto;
  }
`;
