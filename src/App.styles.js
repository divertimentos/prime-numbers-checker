import styled from "styled-components";

// const darkColor = "white";
// const lightColor = "#213547";

const darkColor = "orange";
const lightColor = "#213547";

export const Button = styled.button`
  border: solid 1px
    ${({ matches }) => (matches === "dark" ? `${lightColor}` : `${darkColor}`)};

  margin: auto 0.5rem auto 0.5rem;
  &:hover {
    background-color: ${({ matches }) =>
      matches === "dark" ? `${lightColor}` : `${darkColor}`};
    color: ${({ matches }) =>
      matches === "dark" ? `${lightColor}` : `${darkColor}`};

    transition: 0.2s ease;
  }
`;

// ${({ matches }) => (matches === "dark" ? "white" : "#213547")};
export const Container = styled.div`
  border: 1px solid
    ${({ matches }) => (matches === "dark" ? `${lightColor}` : `${darkColor}`)};
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1rem;

  input {
    border-radius: 6px;
    border: 1px solid #213547;
    padding: 0.25rem;
  }
`;

export const ButtonContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
