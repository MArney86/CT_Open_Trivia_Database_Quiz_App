# Open Trivia Database Quiz App

## Overview

A React-based quiz application that integrates with the [Open Trivia Database API](https://opentdb.com) to provide an interactive trivia experience. This project demonstrates modern React development practices including hooks (`useState`, `useEffect`), component composition, and external API integration.

## Features

- **User Personalization**: Enter your name for a customized experience
- **Category Selection**: Choose from multiple trivia categories including:
  - General Knowledge
  - Science: Computers
  - Entertainment: Television
  - Art
- **Difficulty Levels**: Select from Easy, Medium, or Hard questions
- **Real-time API Integration**: Questions fetched dynamically from Open Trivia Database
- **Randomized Answers**: Answer choices are shuffled for each question
- **Instant Feedback**: Immediate results showing correct answers and user performance

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/CT_Open_Trivia_Database_Quiz_App.git
   cd CT_Open_Trivia_Database_Quiz_App
   ```

2. **Navigate to the project directory**

   ```bash
   cd OpenTriviaQuiz
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the application**
   
   **Development mode:**

   ```bash
   npm run dev
   ```
   
   **Production build:**

   ```bash
   npm run build
   npm run preview
   ```

## Usage Guide

### 1. Welcome Screen

- Enter your name in the provided input field
- Select a trivia category from the dropdown menu
- Choose your preferred difficulty level
- Click "Start Quiz" to begin

### 2. Question Screen

- A loading indicator appears while fetching your question
- Review the question and available answer choices
- Select your answer from the dropdown menu
- Click "Submit your answer!" to proceed

### 3. Results Screen

- View whether your answer was correct or incorrect
- See the correct answer if you answered incorrectly
- Click the restart button to play again with new selections

## Technical Stack

- **Frontend Framework**: React 18
- **Styling**: CSS3
- **API**: Open Trivia Database REST API
- **Build Tool**: Vite
- **State Management**: React Hooks (useState, useEffect)

## Project Structure

```
OpenTriviaQuiz/
├── src/
│   ├── components/
│   │   ├── Welcome.jsx
│   │   ├── Question.jsx
│   │   └── Results.jsx
│   ├── Quiz.css
│   └── App.jsx
├── package.json
└── README.md
```

## API Integration

This application utilizes the [Open Trivia Database API](https://opentdb.com/api_config.php) to fetch trivia questions. The API provides:

- Multiple choice questions
- Various categories and difficulty levels
- URL-encoded responses for proper character handling

## Contributing

This project was created as part of a Coding Temple assignment to reinforce React fundamentals. Feel free to fork and expand upon the functionality.

## License

This project is for educational purposes as part of the Coding Temple curriculum.

## Acknowledgments

- [Open Trivia Database](https://opentdb.com) for providing the trivia API
- Coding Temple for the project requirements and guidance
