"use client"

import { StyledButton, StyledDiv } from './components';

export default function HomePage() {
  return (
    <main>
      <StyledDiv>
        <h1>Nouns Quiz</h1>

        <div className="buttons">
          <StyledButton href="/game">Play</StyledButton>
          <StyledButton href="/ranking">Ranking</StyledButton>
        </div>
      </StyledDiv>
    </main>
  )
}
