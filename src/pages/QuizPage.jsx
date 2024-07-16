import React, { useState } from "react";
import Question from "../pages/Question";
import Result from "../pages/Result";

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showReview, setShowReview] = useState(false);

    const questions = [
        {
            text: "What is ReactJS?",
            options: [
                "A JavaScript library for building user interfaces",
                "A programming language",
                "A database management system",
            ],
            correctAnswer: "A JavaScript library for building user interfaces",
        },
        {
            text: "How does React handle component state?",
            options: ["Through props", "With Redux", "Using the useState Hook"],
            correctAnswer: "Using the useState Hook",
        },
        {
            text: "What is the virtual DOM in React?",
            options: [
                "A lightweight version of the browser DOM",
                "A representation of the UI in memory",
                "A backup DOM for error recovery",
            ],
            correctAnswer: "A representation of the UI in memory",
        },
        {
            text: "In React, what is the purpose of the useEffect Hook?",
            options: [
                "To handle form submissions",
                "To perform side effects in function components",
                "To create custom hooks",
            ],
            correctAnswer: "To perform side effects in function components",
        },
        {
            text: "What is the role of React Router in a React application?",
            options: [
                "To manage application state",
                "To handle asynchronous actions",
                "To enable navigation and routing",
            ],
            correctAnswer: "To enable navigation and routing",
        },
        {
            text: "What is the purpose of the useContext Hook in React?",
            options: [
                "To create global state variables",
                "To manage local component state",
                "To access values from the nearest Context Provider",
            ],
            correctAnswer: "To access values from the nearest Context Provider",
        },
    ];

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
    };

    const checkAnswer = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setSelectedAnswer(null);
        setShowReview(true);
    };

    const moveToNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setShowReview(false);
    };

    const moveToPrevQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
        setShowReview(false);
    };

    const moveToFirstQuestion = () => {
        setCurrentQuestion(0);
        setShowReview(false);
    };

    const moveToLastQuestion = () => {
        setCurrentQuestion(questions.length - 1);
        setShowReview(false);
    };

    const replayQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setShowReview(false);
    };

    const renderReview = () => {
        if (showReview) {
            return questions.map((question, index) => (
                <div key={index} className="review-item">
                    <h3>{question.text}</h3>
                    <div className={`answer ${selectedAnswer === question.correctAnswer ? 'correct' : 'incorrect'}`}>
                        Correct Answer: {question.correctAnswer}
                    </div>
                </div>
            ));
        }
    };

    return (
        <div>
            {currentQuestion < questions.length ? (
                <Question
                    question={questions[currentQuestion]}
                    selectedAnswer={selectedAnswer}
                    onAnswerSelected={handleAnswerSelection}
                    onSubmitAnswer={checkAnswer}
                    onFirstQuestion={moveToFirstQuestion}
                    onPrevQuestion={moveToPrevQuestion}
                    onNextQuestion={moveToNextQuestion}
                    onLastQuestion={moveToLastQuestion}
                />
            ) : (
                <Result score={score} onReplayQuiz={replayQuiz} />
            )}
            <div className="ml-4">
                <button className="btn btn-primary" onClick={replayQuiz}>Quiz</button>

                <button className="btn btn-primary ml-4" onClick={() => setShowReview(!showReview)}>Quiz Review</button>
            </div>
            <div className="review-container">
                {renderReview()}
            </div>
        </div>
    );
};

export default QuizPage;
