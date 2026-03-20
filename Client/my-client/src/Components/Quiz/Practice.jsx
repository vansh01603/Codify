import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { mcq } from "./quizData.js";
import "./Practice.css";

export default function Practice() {
  const [searchParams] = useSearchParams();
  const langFromURL = searchParams.get("lang");

  const [currentLang, setCurrentLang] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [highScore, setHighScore] = useState(localStorage.getItem("quizHighScore") || 0);

  useEffect(() => {
    if (langFromURL && mcq[langFromURL]) {
      startQuiz(langFromURL);
    }
  }, [langFromURL]);

  useEffect(() => {
    if (!showResult && currentLang) {
      if (timeLeft === 0) {
        handleTimeout();
        return;
      }
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, showResult, currentLang]);

  const startQuiz = (lang) => {
    setCurrentLang(lang);
    const selectedQuestions = [...mcq[lang]]
      .sort(() => 0.5 - Math.random())
      .slice(0, 15)
      .map(q => ({
        ...q,
        options: q.options.map(opt => ({
          text: opt,
          isCorrect: opt === q.answer
        }))
      }));
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectCount(0);
    setWrongCount(0);
    setAttemptedCount(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowResult(false);
    setTimeLeft(15);
  };

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    const currentQ = questions[currentQuestionIndex];
    setSelectedOption(index);
    setIsAnswered(true);
    setAttemptedCount(attemptedCount + 1);

    if (currentQ.options[index].isCorrect) {
      setScore(score + 1);
      setCorrectCount(correctCount + 1);
    } else {
      setScore(score - 0.25);
      setWrongCount(wrongCount + 1);
    }
  };

  const handleTimeout = () => {
    setIsAnswered(true);
    setWrongCount(wrongCount + 1);
    setScore(score - 0.25);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(15);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(15);
    }
  };

  const finishQuiz = () => {
    setShowResult(true);
    if (score > highScore) {
      localStorage.setItem("quizHighScore", score);
      setHighScore(score);
    }
  };

  const restartQuiz = () => {
    startQuiz(currentLang);
  };

  if (!currentLang) {
    return (
      <div className="language-select">
        <h2>Select a Language:</h2>
        <select onChange={(e) => startQuiz(e.target.value)}>
          <option value="" disabled selected>Choose your language</option>
          <option value="webDev">Web Development</option>
          <option value="ds">Data Structures</option>
          <option value="ml">Machine Learning</option>
          <option value="c">C Programming</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    let message;
    if (percentage >= 80) message = "Excellent! You're a programming wizard! 🎉";
    else if (percentage >= 60) message = "Good job! You know your stuff! 👍";
    else if (percentage >= 40) message = "Not bad! Keep practicing! 🤓";
    else message = "Keep learning! You'll get better! 💪";

    return (
      <div className="result-container">
        <h2>Final Score: {score.toFixed(2)} / {questions.length}</h2>
        <p>Correct: {correctCount}</p>
        <p>Wrong: {wrongCount}</p>
        <p>Attempted: {attemptedCount} / {questions.length}</p>
        <p>Percentage: {percentage}%</p>
        <p>High Score: {highScore}</p>
        <p>{message}</p>
        <button onClick={restartQuiz}>Restart Quiz</button>
        <button onClick={() => setCurrentLang("")}>Choose Another Language</button>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div>Question {currentQuestionIndex + 1} of {questions.length}</div>
        <div>Score: {score.toFixed(2)}</div>
        <div>Time Left: {timeLeft}s</div>
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="question-text">{currentQ.question}</div>

      <div className="options">
        {currentQ.options.map((option, idx) => (
          <button
            key={idx}
            className={`option-btn 
              ${isAnswered && option.isCorrect ? "correct" : ""} 
              ${isAnswered && selectedOption === idx && !option.isCorrect ? "wrong" : ""}
            `}
            onClick={() => handleSelectOption(idx)}
          >
            {option.text}
          </button>
        ))}
      </div>

      <div className="control-buttons">
        
        {currentQuestionIndex === questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button onClick={nextQuestion}>Next</button>
        )}
      </div>
    </div>
  );
}
// <button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>Previous</button> line 192
