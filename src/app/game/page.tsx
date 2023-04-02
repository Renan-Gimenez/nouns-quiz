"use client"

import GameView from "./view";

export default function GamePage() {
  return (
    <GameView 
      question="Pegunta 123" 
      alternatives={[
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
      ]}
    awnser="3"/>
  )
}
