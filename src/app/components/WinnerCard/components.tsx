import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .data {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    height: 90px;
    width: 90px;
    display: block;
    margin: 0 auto;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .25);
    border-radius: 999px;
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