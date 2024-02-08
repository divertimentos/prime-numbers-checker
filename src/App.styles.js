import styled from "styled-components";

// const darkColor = "white";
// const lightColor = "#213547";

// &:hover {
//   background-color: ${({ matches }) =>
//     matches === "dark" ? `${lightColor}` : `${darkColor}`};
//   color: ${({ matches }) =>
//     matches === "dark" ? `${lightColor}` : `${darkColor}`};
//
//   transition: 0.2s ease;
// }

const darkColor = "orange";
const lightColor = "#213547";

export const Button = styled.button`
  border: solid 1px
    ${({ matches }) => (matches === "dark" ? `${lightColor}` : `${darkColor}`)};

  margin: auto 0.5rem auto 0.5rem;
`;

export const Container = styled.div`
  border: 1px solid grey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 2.5rem;

  ${({ matches }) => (matches === "dark" ? `${lightColor}` : `${darkColor}`)};
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1rem;
`;

export const ButtonContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;
