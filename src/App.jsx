import { useState } from "react";
import questions from "./questions";
import "./App.css";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [nameEntered, setNameEntered] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  // Handle start of the quiz
  const handleStartQuiz = () => {
    if (playerName.trim() !== "") {
      setNameEntered(true);
    }
  };

  // Handle answer selection
  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setLeaderboard([...leaderboard, { name: playerName, score }]);
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setPlayerName("");
    setNameEntered(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      <h1 className="title">Welcome to Quiz App</h1>

      {!nameEntered ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="name-input"
          />
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      ) : showScore ? (
        <div>
          <h2 className="score-section">
            {playerName}, Your Score: {score} / {questions.length}
          </h2>
          <h3>Leaderboard:</h3>
          <ul>
            {leaderboard.map((player, index) => (
              <li key={index}>
                {player.name}: {player.score} / {questions.length}
              </li>
            ))}
          </ul>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerClick(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
