import '../Quiz.css';

export default function Results({currentUser, setCurrentUser, results, setResults, setIsResults, setIsWelcome}) {
    const handleClick = () => {
    setCurrentUser((prevUser) => ({
        ...prevUser,
        category: "",
        difficulty: ""
    }));

    setResults({
        correctAnswer: "",
        userAnswer: "",
        isCorrect: false,
    });

    setIsResults(false);
    setIsWelcome(true);
    }

    return(
        <div className="results-div">
            <div>
                <h1>{currentUser.userName}'s Quiz Results:</h1>
                <p>You got the answer {results.isCorrect ? <span className="answered-correct">CORRECT!!!</span>  : <span class="answered-incorrect">WRONG.</span>}</p>
                {results.isCorrect ? <p>Congratulations {currentUser.userName}!!!</p> : <p>Better luck next time {currentUser.userName}</p>}
                {!results.isCorrect && <p className="correctAnswer">The correct answer was {results.correctAnswer}</p>}
            </div>
            <div>
                <label htmlFor="continue">Would you like to start over with a new question?</label>
                <button type="button" name="continue" id="continue" onClick={handleClick}>New Question</button>
            </div>
        </div>
    );
}
