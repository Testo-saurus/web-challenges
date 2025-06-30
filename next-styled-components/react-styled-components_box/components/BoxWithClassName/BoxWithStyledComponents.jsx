import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <BoxStyle isBlack={isBlack}></BoxStyle>;
}

const BoxStyle = styled.div`
  width: 100px;
  height: 100px;

  margin: 2rem;

  background-color: ${(props) => (props.isBlack ? "black" : "green")};

  &:hover {
    background-color: red;
  }
`;
