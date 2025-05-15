import { useState } from 'react';
import '../Quiz.css';

export default function Welcome({ currentUser, setCurrentUser, setIsVisible, setIsQuestion }) {
    const [error, setError] = useState("")

    const handleChange = (event) => { // This function handles the change event for the input fields
        const {name, value} = event.target; // Destructure the name and value from the event target
        setCurrentUser((prevUser) => ({ // Update the currentUser state while preserving the previous state
            //spread to copy the previous state then update the specific field
            ...prevUser, 
            [name]: value
        }));
    };

    const handleSubmit = (event) => { // This function handles the form submission
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Check if the form is valid before proceeding and exiting the function if not
        if (!validateForm()) { 
            return;
        }

        console.log(currentUser)
        setIsVisible(false); // Hide the Welcome screen
        setIsQuestion(true); //Show the Question Screen
    };

    const validateForm = () => { //function to validate the form for submission
        //unpack the current user for testing the values
        const {userName, category, difficulty} = currentUser;

        //check that no values are empty
        if (userName.trim() === "" || category.trim() === "" || difficulty.trim() === "") {
            //set the Error state to display the requirements for the form the return false
            setError("Username, category, and difficulty are required");
            return false;
        }

        //all values present, make sure error state is empty and return true
        setError('');
        return true;
    };

    return (
        <div className="component-div">
            <h1>Welcome to the Open Trivia Quiz App!</h1>
            <p>To get started, please enter your name,<br/> then select a category and difficulty level.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Name:</label>
                    <input type="text" id="userName" name="userName" value={currentUser.userName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" value={currentUser.category} onChange={handleChange}>
                        <option value="">Select a category</option>
                        <option value="9">General Knowledge</option>
                        <option value="18">Science: Computers</option>
                        <option value="14">Entertainmen: Television</option>
                        <option value="25">Art</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="difficulty">Difficulty:</label>
                    <select id="difficulty" name="difficulty" value={currentUser.difficulty} onChange={handleChange}>
                        <option value="">Select difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                {error && <p className="error_message">{error}</p>}

                <div className='button-div'>
                    <button type="submit" disabled={!validateForm}>Start Quiz</button>
                </div>
            </form>
        </div>  
    );
}

