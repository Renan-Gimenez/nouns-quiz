"use client"

import { StyledButton, StyledDiv } from "./components";

export default function Metamask() {
    return (
      <StyledDiv>
        <img
          className="nouns-logo"
          src="https://nouns.wtf/static/media/noggles.7644bfd0.svg"
          alt="Nouns Logo"
        />
        <StyledButton href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1024px-MetaMask_Fox.svg.png" />
          <span>Connect with MetaMask</span>
        </StyledButton>
      </StyledDiv>
    );
  }
  