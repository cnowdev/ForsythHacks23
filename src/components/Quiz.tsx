import { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    {
      question: 'hello?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      text: 0
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      text: 0
    },

    {
        question: 'Roughly how many hours a day do you have your TV on per day?',
        text: 1,
        Eusage: 0.4,
        options: []

    },
    {
        question: 'Roughly how many hours a day do you run your Air Conditioning?',
        text: 1,
        Eusage: 2,
        options: []

    },
    {
        question: 'Roughly how many hours a day do you have your Microwave on per day?',
        text: 1,
        Eusage: 1.5,
        options: []

    },
    {
        question: 'Roughly how many hours a day do you have your Fridge on per day?',
        text: 1,
        Eusage: 0.4,
        options: []

    },
    {
        question: 'Roughly how many hours a day do you have your Lightbulbs on per day?',
        text: 1,
        Eusage: 0.012,
        options: []

    },
    // Add more questions here...
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [currentNumberInput, setCurrentNumberInput] = useState(0);

  const handleAnswerOptionClick = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="quiz-score-section">
          <p>You scored {score} out of {questions.length}!</p>
          <button onClick={resetQuiz}>Try Again</button>
        </div>
      ) : (
        <div className="quiz-question-section">
          <div className="quiz-question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="quiz-question-text">{questions[currentQuestion].question}</div>
          <div className="quiz-options">
            {questions[currentQuestion].options!.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
            {questions[currentQuestion].text > 0 && <>
                <input type="number" onChange={(e) => setCurrentNumberInput(e)}/>
                <button
                    onClick={() => handleHourSubmit(e)}>Submit</button>
            
            </>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
