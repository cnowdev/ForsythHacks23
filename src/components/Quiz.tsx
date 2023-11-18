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

  const [totalEUsage, setTotalEUsage] = useState(0);
  const [end, setEnd] = useState(false);


  const [currentNumberInput, setCurrentNumberInput] = useState(0);

  const handleAnswerOptionClick = (selectedAnswer: string) => {
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } 
  };

  const handleHourSubmit = (hourInput: number, EusagePerHr: number) => {
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion == questions.length){
      setEnd(true)
    }
    console.log(hourInput, EusagePerHr);

    const newTotalUsage = totalEUsage + (hourInput * EusagePerHr);
    setTotalEUsage(newTotalUsage);
    if(nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    }

    console.log(totalEUsage);
    setCurrentNumberInput(0);
  }


      return (
        <div className="quiz-container">
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
                  <input type="number" onChange={(e) => setCurrentNumberInput(parseInt(e.target.value))} value={currentNumberInput}/>
                  <button
                      onClick={() => handleHourSubmit(currentNumberInput, questions[currentQuestion].Eusage!)}>Submit</button>
  
  <button
                      onClick={() => console.log(totalEUsage)}>debug</button>
              
              </>}
            </div>
          </div>
        
      </div>
      )


  } 

export default Quiz;
