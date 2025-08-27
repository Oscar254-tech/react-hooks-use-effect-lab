import React, { useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1); // Assuming questions start with id 1
  const [score, setScore] = useState(0);
  
  // Find the current question - handle case where currentQuestionId is null
  const currentQuestion = currentQuestionId 
    ? questions.find((q) => q.id === currentQuestionId)
    : null;

  function handleQuestionAnswered(correct) {
    if (correct) {
      setScore((score) => score + 1);
    }
    
    // Move to next question or end game
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestion(null); // No more questions
    }
  }

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}/{questions.length}</h2>
          </>
        )}
      </section>
    </main>
  );
}

export default App;