import Link from "next/link";
import { Timer } from "../components/Timer";
import { Alternative } from "../components/Alternative";
import QuestionCount from "../components/QuestionCount";
import { StyledBackground, StyledContainer, StyledOptionsContainer } from "./components";
import classNames from "classnames";
import { useState } from "react";

type Alternative = {
  id: string;
  title: string;
}

type Props = {
    question: string;
    alternatives: Alternative[];
    awnser: string;
}

export default function GameView({ question, alternatives, awnser }: Props) {
  const [userAwnser, setUserAwnser] = useState("");

  return (
    <StyledBackground>
      <StyledContainer>
        <QuestionCount currentQuestion={13} />
        <Timer totalTime={10} />
        <span className="question">{question}</span>
        <StyledOptionsContainer>
          {alternatives.map((alternative) => 
            <Alternative 
              btnClass={userAwnser !== alternative.id ? "" : classNames({
                'correct-awnser': alternative.id === awnser,
                'wrong-awnser': alternative.id !== awnser
              })} 
              id={alternative.id} 
              title={alternative.title} 
              onClick={() => setUserAwnser(alternative.id)}
            />
          )}
        </StyledOptionsContainer>
      </StyledContainer>
      <Link href="/">Menu</Link>
    </StyledBackground>
  )
}
