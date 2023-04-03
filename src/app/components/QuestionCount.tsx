import styled from "styled-components";

import { RiQuestionLine } from "react-icons/ri";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 8px;
  margin-right: auto;

  position: absolute;
  top: 0;
  left: 0;
  transform: translate(16px, 16px);

  svg {
    color: #808080;
  }

  span {
    color: #808080;
    font-size: 12px;
    font-weight: bold;
  }
`;

export default function QuestionCount(props: any) {
  return (
    <StyledDiv>
      <RiQuestionLine />
      <span>{`${props.currentQuestion + 1}/${props.totalQuestions}`}</span>
    </StyledDiv>
  );
}
