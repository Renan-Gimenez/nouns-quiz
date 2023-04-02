import styled from "styled-components";
import players from "../../players.json";
import { Card } from "./Card";
import { WinnerCard } from "./WinnerCard";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export function PlayersList() {
    const sortedArray = players.players.sort((a, b) => b.points - a.points);
    const winner = sortedArray[0];

    return (
        
      <StyledDiv>
        <WinnerCard 
            key={winner.address}
            name={winner.name}
            address={winner.address.slice(0, 4) + "..." + winner.address.slice(-4)}
            points={winner.points}
        />
        {sortedArray.map((player, index) => {
            if (index === 0) {
                return;
            }

            let s = String(player.address);
            let converted = s.slice(0, 4) + "..." + s.slice(-4);
    
            return (
                <Card
                    key={player.address}
                    name={player.name}
                    address={converted}
                    points={player.points}
                />
            );
        })}
      </StyledDiv>
    );
  }
  