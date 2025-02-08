import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import * as client from "./client";
import "./index.css";

export default function TakeQuizStudent() {
    type AnswersType = {
        [key: string]: string | number | boolean;
    };

    type QuestionType = {
        _id: string;
        type: "Multiple Choice" | "True/False" | "Fill in the Blank";
        correctAnswer: string | number | boolean;
        options?: string[]; // For Multiple Choice
        title: string;
        points: number;
        content?: string; // Add content field
        possibleAnswers?: string[]; // For Fill in the Blank
        caseInsensitive?: boolean; // For Fill in the Blank
    };

    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState({
        name: "",
        description: "",
        quizType: "Graded Quiz",
        points: 0,
        assignmentGroup: "Quizzes",
        shuffleAnswers: true,
        timeLimit: 20,
        multipleAttempts: false,
        showCorrectAnswers: "Never",
        accessCode: "",
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        due: "",
        availableDate: "",
        untilDate: "",
        publishedStatus: false,
        questions: [],
        howManyAttempts: 1 // howManyAttempts to the initial state
    });

    const [answers, setAnswers] = useState<AnswersType>({});
    const [correctAnswers, setCorrectAnswers] = useState<Set<string>>(new Set());
    const [incorrectAnswers, setIncorrectAnswers] = useState<Set<string>>(new Set());
    const [MaxattemptsAllowed, setMaxAttemptsAllowed] = useState(0);
    const [attemptsTook, setAttemptsTook] = useState(0);
    const [attemptsLeft, setAttemptsLeft] = useState<number | string>(0);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false); // State to track if the form is submitted
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const currentUserId = currentUser._id;
    const isFaculty = currentUser.role === "FACULTY"; // Check if the current user is FACULTY

    const fetchQuizQuestions = async (qid: any) => {
        try {
            const resultArray = await client.findQuizById(qid);
            const result = resultArray[0];
            setQuiz(result);
            console.log("quiz result in takeQuizStudent.tsx: ", result);
        } catch (error) {
            console.error("Error fetching quiz: ", error);
            setError('Failed to fetch quiz.');
        }
    };

    const fetchAttempsTookByUser = async (qid: any, currentUserId: any) => {
        try {
            const response = await client.findQuizAttempsInfoByQIdAndUId(qid, currentUserId);
            if (response.data && response.data.attempts !== undefined) {
                console.log("The attempts took in fetchAttempsTookByUser:", response.data.attempts);
                setAttemptsTook(response.data.attempts);
            } else {
                console.warn("No attempts data found, setting attempts to 0.");
                setAttemptsTook(0);  // Default to 0 if no data is found
            }
        } catch (error) {
            console.error("Error fetching attempts:", error);
            setError('Failed to fetch attempts.');
        }
    };

    useEffect(() => {
        if (qid) {
            fetchQuizQuestions(qid);
            fetchAttempsTookByUser(qid, currentUserId);
        }
    }, [qid, currentUserId]);

    useEffect(() => {
        if (quiz) {
            setMaxAttemptsAllowed(quiz.howManyAttempts);
        }
    }, [quiz]);

    useEffect(() => {
        if (isFaculty) {
            setAttemptsLeft("Unlimited");
        } else if (MaxattemptsAllowed > 0 || attemptsTook > 0) {
            const result = MaxattemptsAllowed - attemptsTook;
            setAttemptsLeft(result);
            console.log("MaxattemptsAllowed in takeQuizStudent.tsx:", MaxattemptsAllowed);
            console.log("attempts left in takeQuizStudent.tsx:", result);
        }
    }, [MaxattemptsAllowed, attemptsTook, isFaculty]);

    // Calculate score and track correct/incorrect answers
    const calculateScore = () => {
        let score = 0;
        const correctSet = new Set<string>();
        const incorrectSet = new Set<string>();

        quiz.questions.forEach((question: QuestionType) => {
            const correctAnswer = question.correctAnswer;
            const userAnswer = answers[question._id];

            console.log("the userAnswer is in takeQuizStudent.tsx: ", userAnswer);
            console.log("the correctAnswer is in takeQuizStudent.tsx: ", correctAnswer);

            let isCorrect = false;
            if (question.type === 'Multiple Choice' || question.type === 'True/False') {
                isCorrect = String(correctAnswer) === String(userAnswer);
            } else if (question.type === 'Fill in the Blank') {
                const possibleAnswers = question.possibleAnswers || [];
                isCorrect = possibleAnswers.some(
                    (answer) =>
                        typeof answer === "string" &&
                        typeof userAnswer === "string" &&
                        question.caseInsensitive
                            ? answer.toLowerCase() === userAnswer.toLowerCase()
                            : answer === userAnswer
                );
            }

            if (isCorrect) {
                score += question.points;
                correctSet.add(question._id);
            } else {
                incorrectSet.add(question._id);
            }
        });

        setCorrectAnswers(correctSet);
        setIncorrectAnswers(incorrectSet);

        console.log("the score received for this try is in takeQuizStudent.tsx:", score);
        return score;
    };

    const handleChange = (questionId: string, answer: any) => {
        setAnswers({
            ...answers,
            [questionId]: answer,
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        // Check if attemptsLeft is a number or if the user is a faculty member (unlimited attempts)
        if (typeof attemptsLeft === 'number' && attemptsLeft > 0 || isFaculty) {
            const score = calculateScore(); // calculate the score
    
            // Save the score/update
            await client.saveUserScore(qid, currentUserId, {
                studentId: currentUserId,
                quizId: qid,
                score: score,
                attempts: attemptsTook + 1,
                answers: answers,
            });
    
            setSubmitted(true); // Mark the form as submitted
        } else {
            setError('You have no attempts left.');
        }
    };

    if (error) return <div>{error}</div>;

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">{quiz.name}</h2>
            {(typeof attemptsLeft === 'number' && attemptsLeft > 0)|| isFaculty ? (
                <form onSubmit={handleSubmit} className="quiz-form">
                    {quiz.questions.map((question: QuestionType) => {
                        const questionClass = correctAnswers.has(question._id)
                            ? "correct-answer"
                            : incorrectAnswers.has(question._id)
                                ? "incorrect-answer"
                                : "";
                        return (
                            <div key={question._id} className={`question-container ${questionClass}`}>
                                <h4 className="question-title">{question.title}</h4>
                                {question.content && (
                                    <p className="question-content">{question.content}</p>
                                )}
                                {question.type === 'Multiple Choice' && question.options?.map((option: string, index: number) => (
                                    <label key={index} className="option-label">
                                        <input
                                            type="radio"
                                            name={question._id}
                                            value={option} // Store the actual option value
                                            onChange={() => handleChange(question._id, option)} // Pass the actual option value
                                            className="option-input"
                                            disabled={submitted} // Disable input if submitted
                                        />
                                        {option}
                                    </label>
                                ))}
                                {question.type === 'True/False' && (
                                    <div className="true-false-options">
                                        <label className="option-label">
                                            <input
                                                type="radio"
                                                name={question._id}
                                                value="true"
                                                onChange={() => handleChange(question._id, true)}
                                                className="option-input"
                                                disabled={submitted} // Disable input if submitted
                                            />
                                            True
                                        </label>
                                        <label className="option-label">
                                            <input
                                                type="radio"
                                                name={question._id}
                                                value="false"
                                                onChange={() => handleChange(question._id, false)}
                                                className="option-input"
                                                disabled={submitted} // Disable input if submitted
                                            />
                                            False
                                        </label>
                                    </div>
                                )}
                                {question.type === 'Fill in the Blank' && (
                                    <input
                                        type="text"
                                        name={question._id}
                                        onChange={(e) => handleChange(question._id, e.target.value)}
                                       

                                        className="fill-blank-input"
                                        disabled={submitted} // Disable input if submitted
                                    />
                                )}
                            </div>
                        );
                    })}
                    {!submitted && (
                        <button type="submit" className="submit-button btn btn-danger">
                            Submit
                        </button>
                    )}
                    <button
                        type="button"
                        className="btn btn-dark mt-3"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`)}
                    >
                        Back to Quiz Details
                    </button>
                </form>
            ) : (
                <div className="no-attempts">You have no attempts left.</div>
            )}
        </div>
    );
}