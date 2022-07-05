import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CountStyles = styled.div`
background-color:red;
color:#fff;
position:absolute;
`

const Count = ({
    number="75798",
    duration="3"
}) => {
  const [count, setCount] = useState("0")

  useEffect(() => {
    let start = 0;

    const end = parseInt(number.substring(0,3))

    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);

  }, [number, duration]);

  return (
    <CountStyles>
      <h3>
        <i>{"fyjtud"} {count}</i>
      </h3>
    </CountStyles>
  );
}

export default Count;