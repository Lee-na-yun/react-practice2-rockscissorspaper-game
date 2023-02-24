import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand } from "./utils";
import "./App.css";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "나";
  if (comparison < 0) return "상대";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value); //input의 value 속성 참조하는 법 // Number = 문자열을 숫자형으로 바꿔 줌
    if (num > 9) num %= 10; // 1과 9 사이의 숫자로 만들어 줌
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div className="inner">
      <h2>가위바위보</h2>
      <Button onClick={handleClearClick}></Button>
      <div className="score-wrap">
        <div className="score-box">
          <span className="score">{score}</span>
          <em>나</em>
        </div>
        <span className="score-dash">:</span>
        <div className="score-box">
          <span className="score">{otherScore}</span>
          <em>상대</em>
        </div>
      </div>

      <div className="game-wrap">
        <div className="game-hand-wrap">
        <div
            className={
              score < otherScore || score === otherScore ? "HandIcon" : "winner"
            }
          >
            <HandIcon value={hand} className="HandIcon-icon" />
          </div>
          <em>VS</em>
          <div
            className={
              otherScore < score || otherScore === score ? "HandIcon" : "winner"
            }
          >
            <HandIcon value={otherHand} className="HandIcon-icon" />
          </div>
        </div>

        <div className="bet-wrap">
          <span>배점</span>
          <input
            type="number"
            value={bet}
            min={1}
            max={9}
            step={1}
            onChange={handleBetChange}
          />
          <span>배</span>
        </div>
        <div className="history-wrap">
          <h3>승부기록</h3>
          <p>{gameHistory.join(", ")}</p>
        </div>
      </div>
      <HandButton value="rock" onClick={handleButtonClick} />
      <HandButton value="scissor" onClick={handleButtonClick} />
      <HandButton value="paper" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
