

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router";
// import * as client from "./client";
// import ProtectedRouteFaculty from "./ProtectedRouteFaculty";
// import ProtectedRouteStudent from "./ProtectedRouteStudent";
// import { useSelector } from "react-redux";

// export default function QuizDetailsScreen() {
//     const navigate = useNavigate();
//     const { cid, qid } = useParams();
//     const [quiz, setQuiz] = useState<any>(null);
//     const [loading, setLoading] = useState(true); // Add loading state
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const currentUserId = currentUser._id;
//     const fetchQuizDetails = async (qid: any) => {
//         // console.log("fetchQuizDetails called with qid:", qid);
//         try {
//             const fetchedQuiz = await client.findQuizById(qid);
//             console.log("fetched quiz in quizdetailsScreen.tsx: ", fetchedQuiz);
//             setQuiz(fetchedQuiz[0]);
//         } catch (error) {
//             console.error("Failed to fetch quiz details:", error);
//         } finally {
//             setLoading(false); // Set loading to false when data is fetched
//         }
//     }

//     useEffect(() => {
//         // console.log("useEffect triggered with qid:", qid);
//         if (qid) {
//             fetchQuizDetails(qid);
//             console.log("quiz detail fetched in quizdetailsscreen.tsx: ", quiz)
//         }
//     }, [qid]);

//     if (loading) {
//         return <div>Loading quiz details...</div>; // Show a loading state
//     }

//     if (!quiz) {
//         return <div>No quiz found or failed to load quiz details.</div>; // Handle case where quiz is not found
//     }

//     return (
//         <div className="quiz-details-container">
//             <h1>{quiz.name}</h1>
//             <div className="quiz-details " style={{ border: '1px solid black', padding: '10px', borderRadius: '8px'}}>
//                 <p><strong>Quiz Type:</strong> {quiz.quizType}</p>
//                 <p><strong>Points:</strong> {quiz.points}</p>
//                 <p><strong>Assignment Group:</strong> {quiz.assignmentGroup}</p>
//                 <p><strong>Shuffle Answers:</strong> {quiz.shuffleAnswers ? "Yes" : "No"}</p>
//                 <p><strong>Time Limit:</strong> {quiz.timeLimit} Minutes</p>
//                 <p><strong>Multiple Attempts:</strong> {quiz.multipleAttempts ? "Yes" : "No"}</p>
//                 {quiz.multipleAttempts && (
//                     <p><strong>How Many Attempts:</strong> {quiz.howManyAttempts}</p>
//                 )}
//                 <p><strong>Show Correct Answers:</strong> {quiz.showCorrectAnswers}</p>
//                 <p><strong>Access Code:</strong> {quiz.accessCode || "None"}</p>
//                 <p><strong>One Question at a Time:</strong> {quiz.oneQuestionAtATime ? "Yes" : "No"}</p>
//                 <p><strong>Webcam Required:</strong> {quiz.webcamRequired ? "Yes" : "No"}</p>
//                 <p><strong>Lock Questions After Answering:</strong> {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</p>
//                 <p><strong>Due Date:</strong> {quiz.due ? new Date(quiz.due).toLocaleDateString() : "N/A"}</p>
//                 <p><strong>Available Date:</strong> {quiz.availableDate ? new Date(quiz.availableDate).toLocaleDateString() : "N/A"}</p>
//                 <p><strong>Until Date:</strong> {quiz.untilDate ? new Date(quiz.untilDate).toLocaleDateString() : "N/A"}</p>
//             </div>
//             <div className="quiz-details-actions">
//                 <ProtectedRouteFaculty>
//                 <br/>
//                 {/* Uncomment buttons and update the navigate paths accordingly */}
//                 <button
//                     className="btn btn-primary me-2"
//                     onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`)}
//                 >
//                     Preview
//                 </button>
//                 <button
//                     className="btn btn-secondary"
//                     onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`)}
//                 >
//                     Edit
//                 </button>
//                 </ProtectedRouteFaculty>

//                 <ProtectedRouteStudent>
//                     <br/>
//                 <button
//                     className="btn btn-danger"
//                     onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Start`)}
//                 >
//                     Start
//                 </button> 
//                 </ProtectedRouteStudent>
//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import * as client from "./client";
import ProtectedRouteFaculty from "./ProtectedRouteFaculty";
import ProtectedRouteStudent from "./ProtectedRouteStudent";
import { useSelector } from "react-redux";

export default function QuizDetailsScreen() {
    const navigate = useNavigate();
    const { cid, qid } = useParams();
    const [quiz, setQuiz] = useState<any>(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const [userScore, setUserScore] = useState<string | number>("N/A"); // Add state for user's score
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const currentUserId = currentUser._id;

    const fetchQuizDetails = async (qid: any) => {
        try {
            const fetchedQuiz = await client.findQuizById(qid);
            console.log("fetched quiz in quizdetailsScreen.tsx: ", fetchedQuiz);
            setQuiz(fetchedQuiz[0]);
        } catch (error) {
            console.error("Failed to fetch quiz details:", error);
        } finally {
            setLoading(false); // Set loading to false when data is fetched
        }
    }

    const fetchUserScore = async (qid: any, uid: any) => {
        try {
            const score = await client.getQuizScore(qid, uid);
            setUserScore(score !== null ? score : "N/A"); // Set score or "N/A" if no score found
        } catch (error) {
            console.error("Failed to fetch user score:", error);
            setUserScore("N/A"); // In case of error, set score to "N/A"
        }
    }

    useEffect(() => {
        if (qid) {
            fetchQuizDetails(qid);
            fetchUserScore(qid, currentUserId);
            console.log("quiz detail fetched in quizdetailsscreen.tsx: ", quiz);
        }
    }, [qid]);

    if (loading) {
        return <div>Loading quiz details...</div>; // Show a loading state
    }

    if (!quiz) {
        return <div>No quiz found or failed to load quiz details.</div>; // Handle case where quiz is not found
    }

    return (
        <div className="quiz-details-container">
            <h1>{quiz.name}</h1>
            <div className="quiz-details" style={{ border: '1px solid black', padding: '10px', borderRadius: '8px' }}>
                <p><strong>Quiz Type:</strong> {quiz.quizType}</p>
                <p><strong>Points:</strong> {quiz.points}</p>
                <p><strong>Assignment Group:</strong> {quiz.assignmentGroup}</p>
                <p><strong>Shuffle Answers:</strong> {quiz.shuffleAnswers ? "Yes" : "No"}</p>
                <p><strong>Time Limit:</strong> {quiz.timeLimit} Minutes</p>
                <p><strong>Multiple Attempts:</strong> {quiz.multipleAttempts ? "Yes" : "No"}</p>
                {quiz.multipleAttempts && (
                    <p><strong>How Many Attempts:</strong> {quiz.howManyAttempts}</p>
                )}
                <p><strong>Show Correct Answers:</strong> {quiz.showCorrectAnswers}</p>
                <p><strong>Access Code:</strong> {quiz.accessCode || "None"}</p>
                <p><strong>One Question at a Time:</strong> {quiz.oneQuestionAtATime ? "Yes" : "No"}</p>
                <p><strong>Webcam Required:</strong> {quiz.webcamRequired ? "Yes" : "No"}</p>
                <p><strong>Lock Questions After Answering:</strong> {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</p>
                <p><strong>Due Date:</strong> {quiz.due ? new Date(quiz.due).toLocaleDateString() : "N/A"}</p>
                <p><strong>Available Date:</strong> {quiz.availableDate ? new Date(quiz.availableDate).toLocaleDateString() : "N/A"}</p>
                <p><strong>Until Date:</strong> {quiz.untilDate ? new Date(quiz.untilDate).toLocaleDateString() : "N/A"}</p>
                <p><strong>Current Score:</strong> {userScore}</p> {/* Display the current score */}
            </div>
            <div className="quiz-details-actions">
                <ProtectedRouteFaculty>
                    <br/>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Start`)}
                    >
                        Preview
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`)}
                    >
                        Edit
                    </button>
                </ProtectedRouteFaculty>

                <ProtectedRouteStudent>
                    <br/>
                    <button
                        className="btn btn-danger"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Start`)}
                    >
                        Start
                    </button> 
                </ProtectedRouteStudent>
            </div>
        </div>
    );
}
