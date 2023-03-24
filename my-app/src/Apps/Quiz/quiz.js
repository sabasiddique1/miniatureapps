
import React, { useState } from 'react';
import './Quiz.css';

const quizData = [
  {
    question: 'What is your favorite thing to do?',
    answers: [
      { text: 'Read a book', perspective: 'Intellectual' },
      { text: 'Go for a hike', perspective: 'Nature-lover' },
      { text: 'Watch a movie', perspective: 'Cinematic' },
      { text: 'Play a sport', perspective: 'Athletic' },
    ],
  },
  {
    question: 'What do you like to do when you have free time?',
    answers: [
      { text: 'Go on a walk', perspective: 'Outdoorsy' },
      { text: 'Learn something new', perspective: 'Curious' },
      { text: 'Spend time with friends', perspective: 'Social' },
      { text: 'Play video games', perspective: 'Gamer' },
    ],
  },
  {
    question: 'What is your favorite way to relax?',
    answers: [
      { text: 'Meditate', perspective: 'Spiritual' },
      { text: 'Listen to music', perspective: 'Musical' },
      { text: 'Take a nap', perspective: 'Laid-back' },
      { text: 'Cook a meal', perspective: 'Foodie' },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [perspective, setPerspective] = useState('');

  const handleAnswer = (answer) => {
    const newPerspective = answer.perspective;
    setPerspective(newPerspective);
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setPerspective('');
  };

  const renderQuestion = () => {
    const question = quizData[currentQuestion];
    return (
      <>
    <div className='container'>
    <div className='h2-quiz-app'>
        <h2>Personality Quiz</h2>
      </div>
    </div>
      <div className="quiz-app">
        <h2>{question.question}</h2>
        {question.answers.map((answer) => (
          <button  className="quiz-button" key={answer.text} onClick={() => handleAnswer(answer)}>
            {answer.text}
          </button>
        ))}
      </div></>
    );
  };

  const renderResult = () => {
    return (
      <div>
        <h2 className='h2'>Your Perspective: {perspective}</h2>
        <p className='paragraph'>Keep exploring and trying new things to gain new perspectives!</p>
        <button className="quiz-restart-button" onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  };

  return (
    <div className="quiz-container-app">
      {currentQuestion < quizData.length ? renderQuestion() : renderResult()}
    </div>
  );
}

export default App;

