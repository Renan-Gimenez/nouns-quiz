import Link from "next/link";
import styled from "styled-components";


export const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 48px;

  .buttons {
    display: flex;
    flex-direction: column;

    gap: 16px;
  }
`;

export const StyledButton = styled(Link)`
  width: 160px;

  font-size: 16px;
  font-weight: 500;

  padding: 10px 20px;

  border: none;
  outline: none;
  border-radius: 99px;

  background-color: #f1f1f1;
  text-decoration: none;

  transition: 200ms;
  text-align: center;

  :hover {
    transform: scale(1.05);
  }
`;
