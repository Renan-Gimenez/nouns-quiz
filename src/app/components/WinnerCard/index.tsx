import { StyledDiv, StyledImg, StyledInfo, StylizedPoints } from "./components";

import { TbCrown } from "react-icons/tb";

type Props = {
  name: string;
  address: string;
  points: number;
}

export function WinnerCard(props: Props) {
    return (
      <StyledDiv>
        <StyledInfo>
          <StyledImg
            src={"https://pbs.twimg.com/media/Efx9lfUUEAAUQcT.jpg"}
          />
          <div className="data">
            <span className="name">{props.name}</span>
            <span className="address">{props.address}</span>
          </div>
        </StyledInfo>
  
        <StylizedPoints>
          <TbCrown />
          <span>{props.points}</span>
        </StylizedPoints>
      </StyledDiv>
    );
  }