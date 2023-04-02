import styled from"styled-components";
import Link from "next/link";

export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    padding: 10vh 0;
`

export const StyledDiv = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100vw;

  display: flex;
  justify-content: center;
`;

export const StyledHomeButton = styled(Link)`
  width: 100px;

  display: flex;
  align-items: center;
  gap: 4px;

  margin: 24px auto;
  padding: 10px 20px;

  background-color: white;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);

  text-decoration: none;

  border-radius: 99px;
  outline: none;
  border: none;
  cursor: pointer;

  transition: 200ms;
  :hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 12px;
  }
`;