import styled from "styled-components";

export const StyledDiv = styled.div`
    height: 52px;
    width: 298px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    background-color: #ffffff;
    border-radius: 99px;

    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
`;

export const StyledInfo = styled.div`
    height: 52px;
    height: 52px;

    display: flex;
    gap: 10px;
    padding: 10px 0;
    
    .data {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
    }
    
    .name {
        font-size: 14px;
        font-weight: 500;
    }

    .address {
        font-size: 14px;
        font-weight: 500;
        color: #6791b2;
    }
`;

export const StyledImg = styled.img`
    height: 100%;
    border-radius: 32px;
`;

export const StylizedPoints = styled.div`
  display: flex;
  gap: 8px;

  svg {
    fill: #000;
  }

  span {
    font-weight: 600;
    font-size: 14px;
  }
`;