import styled from "styled-components";

const StyledButton = styled.button`
  height: 50px;

  max-width: 298px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 0 21px;

  cursor: pointer;
  transition: 200ms;

  :hover {
    transform: scale(1.05);
  }

  span {
    font-size: 12px;
    font-weight: 500;
  }
`;

type OptionProps = {
  btnClass?: string;
  id: string;
  title: string;
  onClick: any;
}

export function Alternative({ btnClass, id, title, onClick }: OptionProps) {

  return (
    <StyledButton className={btnClass}
      id={id}
      onClick={onClick}
    >
      <span>{title}</span>
    </StyledButton>
  );
}
