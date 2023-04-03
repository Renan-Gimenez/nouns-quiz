import Link from "next/link";
import { Alternative } from "../components/Alternative";
import QuestionCount from "../components/QuestionCount";
import { Timer } from "../components/Timer";
import { StyledBackground, StyledContainer, StyledOptionsContainer } from "./components";
import { useGame } from "./useGame";

type Alternative = {
  id: string;
  title: string;
}

export default function GameView() {
  const { currentQuestionId, totalQuestions, question, alternatives, score, onAnswer, onGameOver } = useGame();

  return (
    <StyledBackground>
      <StyledContainer>
        <QuestionCount currentQuestion={currentQuestionId} totalQuestions={totalQuestions} />
        Score: {score}
        <Timer totalTime={10} onTimeOut={onGameOver} />
        <span className="question">{question}</span>
        <StyledOptionsContainer>
          {alternatives.map((alternative) =>
            <Alternative
              // btnClass={userAwnser !== alternative.id ? "" : classNames({
              //   'correct-awnser': alternative.id === awnser,
              //   'wrong-awnser': alternative.id !== awnser
              // })}
              key={alternative.id}
              id={alternative.id}
              title={alternative.title}
              onClick={() => onAnswer(alternative.id)}
            />
          )}
        </StyledOptionsContainer>
      </StyledContainer>
      <Link href="/">Menu</Link>
    </StyledBackground>
  )
}
