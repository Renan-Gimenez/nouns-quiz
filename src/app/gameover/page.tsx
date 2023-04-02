"use client"

import { Container, LinksDiv, StyledLink } from "./components";

export default function GameOverPage() {
    return(
        <Container>
            <h1>Game Over</h1>
            <LinksDiv>
                <StyledLink href="/">Main Page</StyledLink>
                <StyledLink href="/ranking">Ranking</StyledLink>
            </LinksDiv>
        </Container>
    );
}