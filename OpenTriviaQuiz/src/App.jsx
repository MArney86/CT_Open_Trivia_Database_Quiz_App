import { useState } from 'react';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Results from './components/Results';
import './Quiz.css';

function App() {
  const [userObject, setUserObject] = useState({
    userName: "",
    category: 0,
    difficulty: "",
  })

  const [isWelcome, setIsWelcome] = useState(true);
  const [isQuestion, setIsQuestion] = useState(false);
  const [isResults, setIsResults] = useState(false);
  const [results, setResults] = useState({
    correctAnswer: "",
    userAnswer: "",
    isCorrect: false,
  });

  return (
    <>
      {isWelcome && <Welcome currentUser={userObject}  setCurrentUser={setUserObject} setIsVisible={setIsWelcome} setIsQuestion={setIsQuestion} />}
      {isQuestion && <Question currentUser={userObject} setIsQuestion={setIsQuestion} results={results} setResults={setResults} setIsResults={setIsResults} />}
      {isResults && <Results currentUser={userObject} setCurrentUser={setUserObject} setResults={setResults} results={results} setIsResults={setIsResults} setIsWelcome={setIsWelcome} />}
    </>
  )
}

export default App
