import React from "react";
import "../css/Question.css";

const Question = ({
    question,
    selectedAnswer,
    onAnswerSelected,
    onSubmitAnswer,
    onFirstQuestion,
    onPrevQuestion,
    onNextQuestion,
    onLastQuestion,
}) => {
    return (
        <div>
            <h1 className="Question-title d-flex justify-content-center" style={{
                background: "black",
                color: "white"
            }}> JavaScript Quiz </h1>
            <div class="centered">
                <h2>{question.text}</h2>

                <ul>
                    {question.options.map((option, index) => (
                        <li key={index}>
                            <input
                                type="radio"
                                id={`option${index}`}
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => onAnswerSelected(option)}
                            />
                            <label htmlFor={`option${index}`}>{option}</label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="d-flex justify-content-center p-4 mb-5 ">
                <button className="btn btn-primary" onClick={onFirstQuestion}>First</button>
                <button className="btn btn-primary ml-3 " onClick={onNextQuestion}>Next</button>
                <button className="btn btn-primary ml-3" onClick={onLastQuestion}>Last</button>

            </div>

            <div>
                <button onClick={onSubmitAnswer} className="btn btn-success  ml-4 mb-4">Submit Answer</button>
            </div>

        </div>
    );
};

export default Question;
