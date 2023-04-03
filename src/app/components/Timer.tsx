"use client"

import { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
`;

const BoxCircle = styled.div`
  svg {
    height: 90px;
    width: 90px;
    position: relative;

    display: flex;
    align-items: center;
  }
`;

const Circle = styled.circle`
  height: 90px;
  width: 90px;
  fill: none;

  position: absolute;
  top: 0;
  left: 0;

  stroke-linecap: round;

  stroke: dodgerblue;
  stroke-width: 10;

  transform: translate(5px, 5px);

  transition: stroke-dashoffset 1s linear;
`;

const Number = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type Props = {
  totalTime: number;
  onTimeOut: () => void;
}

export function Timer({ totalTime, onTimeOut }: Props) {
  const initialTime = totalTime;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const circlePerimeter = 2 * Math.PI * 40;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeOut();
    }
  }, [timeLeft])

  return (
    <Box>
      <BoxCircle>
        <svg>
          <Circle
            cx="40"
            cy="40"
            r="40"
            strokeDasharray={circlePerimeter}
            strokeDashoffset={circlePerimeter * (1 - timeLeft / totalTime)}
          ></Circle>
        </svg>
      </BoxCircle>
      <Number>
        <h2>{timeLeft}s</h2>
      </Number>
    </Box>
  );
}
