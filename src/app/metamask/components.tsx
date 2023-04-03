import Link from "next/link";
import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #6A79FF;

  .nouns-logo {
    height: 60px;
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
  }
`;

export const StyledButton = styled(Link)`
  padding: 10px 20px;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 16px;

  background-color: #efefef;

  white-space: nowrap;

  align-self: flex-end;

  position: absolute;
  bottom: 0;
  left: 50vw;

  transform: translate(-50%, -50%);

  outline: none;
  border: none;
  border-radius: 99px;

  cursor: pointer;
  transition: 200ms;

  :hover {
    letter-spacing: 1px;
  }

  img {
    height: 40px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;