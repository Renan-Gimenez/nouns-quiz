"use client"

import { Container, StyledDiv, StyledHomeButton } from "./components";
import { AiFillHome } from "react-icons/ai";
import { PlayersList } from "../components/PlayerList";

export default function RankingPage() {
  return (
    <Container>
      <StyledDiv>
        <PlayersList />
      </StyledDiv>

      <StyledHomeButton href="/">
        <AiFillHome />
        Home
      </StyledHomeButton>
    </Container>
  )
}
