import { useState, useEffect } from 'react';
import '../Quiz.css';

export default function Question({ currentUser, setIsQuestion, results, setResults, setIsResults}) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [answersRandomized, setAnswersRandomized] = useState([]);
    const [question, setQuestion] = useState({
        question: "",
        correctAnswer: "",
        incorrectAnswers: [],
        difficulty: "",
        category: "",
    });

    useEffect(() => {
        const getQuestion = async () => {
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=1&category=${currentUser.category}&difficulty=${currentUser.difficulty}&type=multiple&encode=url3986`);
    
                if(!response.ok) {
                    setError(`Failed to recieve question from Open Trivia DB:`);
                }
    
                console.log(response);
    
                const data = await response.json();

                const returnedObject = data.results[0];
    
                setQuestion({
                    question: returnedObject.question,
                    correctAnswer: returnedObject.correct_answer,
                    incorrectAnswers: returnedObject.incorrect_answers,
                    difficulty: returnedObject.difficulty,
                    category: returnedObject.category,
                });

                console.log(question)

                const tempAnswers = [...returnedObject.incorrect_answers];
                tempAnswers.splice(Math.floor(Math.random() * (tempAnswers.length + 1)), 0, returnedObject.correct_answer);
                setAnswersRandomized(tempAnswers);
                 
            } catch (e) {
                setError(e.message)
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }

        getQuestion();
        console.log(answersRandomized)

    },[currentUser]);


    const handleChange = (event) => {
        //const {name, value} = event.target; // Destructure the name and value from the event target
        setResults((prevChoice) => ({ // Update the currentUser state while preserving the previous state
            //spread to copy the previous state then update the specific field
            ...prevChoice, 
            userAnswer: event.target.value
        }));
    }

    const validateForm = () => {
        if(results.userAnswer === "") {
            setError("You must choose an answer to submit");
            return false;
        }

        setError("");
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!validateForm()) {
            console.log("failed validation")
            return;
        }

        setResults((prevResults) => ({ // Update the currentUser state while preserving the previous state
            //spread to copy the previous state then update the specific field
            ...prevResults, 
            correctAnswer: question.correctAnswer,
            isCorrect: (results.userAnswer === question.correctAnswer)
        }));

        setIsQuestion(false);
        setIsResults(true);
    }

    return (
        <div className="component-div">
            {isLoading ? <h1>Loading Question...</h1> : <form onSubmit={handleSubmit}>
                    <div className='question-div-1'>
                        <h2>Question: {decodeURIComponent(question.question)}</h2>
                    </div>    
                    <div>    
                        <label htmlFor="quiz">Please choose one of the following answers:</label>
                        <select id="quiz" name="quiz" value={results.userAnswer} onChange={handleChange}>
                            <option value="">Please choose and answer!</option>
                            {answersRandomized.length > 0 ? ( answersRandomized.map(answer => (
                            <option value={answer} key={answersRandomized.indexOf(answer)}>{decodeURIComponent(answer)}</option>
                            ))) : (<option>Shuffling Answers...</option>)}
                        </select>
                    </div>
                    <div className='button-div-2'>
                        <button type="submit" disabled={!validateForm}>Submit your answer!</button>
                    </div>
                </form>}
            {error && <h1 className="error_message">{error}</h1>}
        </div>
    );

}