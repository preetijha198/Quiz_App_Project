import { useState, useEffect } from "react";
import allQuestions from "./questions";
import "./App.css";

// Function to shuffle and select 5 random questions
const getRandomQuestions = (questions, num = 5) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [username, setUsername] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  // Load leaderboard from local storage
  useEffect(() => {
    const storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setLeaderboard(storedLeaderboard);
  }, []);

  // Load 5 random questions when quiz starts
  const startQuiz = () => {
    if (username.trim() === "") {
      alert("Please enter your name to start the quiz!");
      return;
    }
    setQuestions(getRandomQuestions(allQuestions));
    setQuizStarted(true);
  };

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      saveScore();
    }
  };

  // Save user's score in local storage
  const saveScore = () => {
    const newEntry = { name: username, score };
    const updatedLeaderboard = [...leaderboard, newEntry].sort((a, b) => b.score - a.score);
    setLeaderboard(updatedLeaderboard);
    localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderboard));
  };

  return (
    <div className="quiz-container">
      <h1 className="title">Welcome to Quiz App</h1>

      {!quizStarted ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={startQuiz}>Start Quiz</button>

          <h2>Leaderboard</h2>
          <ul>
            {leaderboard.map((entry, index) => (
              <li key={index}>
                {entry.name}: {entry.score} / 5
              </li>
            ))}
          </ul>
        </div>
      ) : showScore ? (
        <div>
          <h2 className="score-section">{username}, Your Score: {score} / {questions.length}</h2>
          <h2>Leaderboard</h2>
          <ul>
            {leaderboard.map((entry, index) => (
              <li key={index}>
                {entry.name}: {entry.score} / 5
              </li>
            ))}
          </ul>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestion]?.question}</h3>
          {questions[currentQuestion]?.options.map((option, index) => (
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
