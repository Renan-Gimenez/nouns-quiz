import styled from "styled-components";

export const StyledBackground = styled.div`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;

  padding: 32px;

  background: linear-gradient(45deg, #93c5fd, #2563eb);
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.25);

  .question {
    font-size: 18px;
    font-weight: bold;

    margin: 20px 0 40px 0;

    text-align: center;

    margin-top: auto;
  }
`;

export const StyledContainer = styled.div`
  min-height: 484px;
  width: 330px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 16px 16px 40px 16px;

  background-color: #ffffff;
  border-radius: 16px;
`;

export const StyledOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 20px;

  margin-right: auto;

  background-color: white;
  border: none;
  outline: none;
  border-radius: 99px;

  cursor: pointer;
  transition: 200ms;

  :hover {
    transform: scale(1.05);
  }
`;