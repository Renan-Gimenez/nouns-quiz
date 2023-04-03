
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useGame = () => {
  const [score, setScore] = useState(0);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const router = useRouter();

  const question = allQuestions[currentQuestionId];

  const onAnswer = (playerAnswer: string) => {
    if (playerAnswer === question.correctAnswer) {
      setScore(score + 10);
    } else {
      setScore(Math.max(0, score - 10))
    }

    console.log({ currentQuestionId }, allQuestions.length)

    const isGameOver = currentQuestionId == allQuestions.length - 1;

    if (isGameOver) {
      onGameOver();
      return;
    }

    // Next question
    setCurrentQuestionId(currentQuestionId + 1);
  }

  const onGameOver = () => {
    setTimeout(() => {
      router.push('/');
      alert(`Game over!`);      

    }, 0);
  }

  return { currentQuestionId, totalQuestions: allQuestions.length, question: question.title, alternatives: question.alternatives, score, onAnswer, onGameOver };
}


const allQuestions = [
  {
    title: "Pegunta 1",
    alternatives: [
      {
        id: "1",
        title: "Alternativa 1",
      },
      {
        id: "2",
        title: "Alternativa 2",
      },
      {
        id: "3",
        title: "Alternativa 3",
      },
      {
        id: "4",
        title: "Alternativa 4",
      }
    ],
    correctAnswer: '1'
  },
  {
    title: "Pegunta 2",
    alternatives: [
      {
        id: "1",
        title: "Alternativa 1",
      },
      {
        id: "2",
        title: "Alternativa 2",
      },
      {
        id: "3",
        title: "Alternativa 3",
      },
      {
        id: "4",
        title: "Alternativa 4",
      }
    ],
    correctAnswer: '2'
  },
  {
    title: "Pegunta 3",
    alternatives: [
      {
        id: "1",
        title: "Alternativa 1",
      },
      {
        id: "2",
        title: "Alternativa 2",
      },
      {
        id: "3",
        title: "Alternativa 3",
      },
      {
        id: "4",
        title: "Alternativa 4",
      }
    ],
    correctAnswer: '3'
  },
  {
    title: "Pegunta 4",
    alternatives: [
      {
        id: "1",
        title: "Alternativa 1",
      },
      {
        id: "2",
        title: "Alternativa 2",
      },
      {
        id: "3",
        title: "Alternativa 3",
      },
      {
        id: "4",
        title: "Alternativa 4",
      }
    ],
    correctAnswer: '4'
  }
];
