// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import * as client from "./client";
// import "./index.css";
// import QuizQuestionsEditor from "./QuizQuestionsEditor";
// export default function QuizEditor() {
//   const { cid, qid } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [activeTab, setActiveTab] = useState("details");
//   const [loading, setLoading] = useState(true); // Add loading state
//   const [quiz, setQuiz] = useState({
//     name: "",
//     description: "",
//     quizType: "Graded Quiz",
//     points: 0,
//     assignmentGroup: "Quizzes",
//     shuffleAnswers: true,
//     timeLimit: 20,
//     multipleAttempts: false,
//     showCorrectAnswers: "Never",
//     accessCode: "",
//     oneQuestionAtATime: true,
//     webcamRequired: false,
//     lockQuestionsAfterAnswering: false,
//     due: "",
//     availableDate: "",
//     untilDate: "",
//     publishedStatus: false,
//     howManyAttempts: 0,
//   });

//   const fetchQuizDetails = async (qid: any) => {
//     // console.log("fetchQuizDetails called with qid:", qid);
//     try {
//       const fetchedQuiz = await client.findQuizById(qid);
//       console.log("fetched quiz in quizdetailsScreen.tsx: ", fetchedQuiz);
//       setQuiz(fetchedQuiz[0]);
//     } catch (error) {
//       console.error("Failed to fetch quiz details:", error);
//     } finally {
//       setLoading(false); // Set loading to false when data is fetched
//     }
//   };

//   useEffect(() => {
//     // console.log("useEffect triggered with qid:", qid);
//     if (qid) {
//       fetchQuizDetails(qid);
//       console.log("quiz detail fetched in quizdetailsscreen.tsx: ", quiz);
//     }
//   }, [qid]);

//   if (loading) {
//     return <div>Loading quiz details...</div>; // Show a loading state
//   }

//   if (!quiz) {
//     return <div>No quiz found or failed to load quiz details.</div>; // Handle case where quiz is not found
//   }

//   const handleInputChange = (e: any) => {
//     const { name, value, type, checked } = e.target;
//     setQuiz({
//       ...quiz,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSave = () => {
//     if (qid) {
//       client.updateQuiz(qid, quiz).then(() => {
//         navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
//       });
//     }
//   };

//   //   const handleSaveAndPublish = () => {
//   //       setQuiz({ ...quiz, publishedStatus: true });
//   //       handleSave();
//   //   };

//   const handleCancel = () => {
//     navigate("/quizzes");
//   };

//   if (loading) {
//     return <div>Loading quiz details...</div>; // Show a loading state
//   }

//   if (!quiz) {
//     return <div>No quiz found or failed to load quiz details.</div>; // Handle case where quiz is not found
//   }

//   return (
//     <div
//       id="wd-quiz-editor"
//       style={{
//         border: "1px solid black",
//         padding: "10px",
//         borderRadius: "8px",
//       }}
//     >
//       <div className="mb-3">
//         <button
//           className={`tab-button ${activeTab === "details" ? "active" : ""}`}
//           onClick={() => setActiveTab("details")}
//         >
//           Details
//         </button>
//         <button
//           className={`tab-button ${activeTab === "questions" ? "active" : ""}`}
//           onClick={() => setActiveTab("questions")}
//         >
//           Questions
//         </button>
//       </div>

//       <hr />

//       {activeTab === "details" && (
//         <form className="details-tab">
//           <div className="form-group">
//             <label>Title:</label>
//             <input
//               type="text"
//               name="name"
//               value={quiz.name}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Description:</label>
//             <textarea
//               name="description"
//               value={quiz.description}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <br />

//           <div className="form-group">
//             <label>Nummber of Attempts:</label>
//             <input
//               type="number"
//               name="howManyAttempts"
//               value={quiz.howManyAttempts}
//               onChange={handleInputChange}
//               className="form-control"
//               min="1" // Ensure a minimum of 1 attempt
//             />
//           </div>

//           <div className="form-group">
//             <label>Quiz Type:</label>
//             <select
//               name="quizType"
//               value={quiz.quizType}
//               onChange={handleInputChange}
//               className="form-control"
//             >
//               <option value="Graded Quiz">Graded Quiz</option>
//               <option value="Practice Quiz">Practice Quiz</option>
//               <option value="Graded Survey">Graded Survey</option>
//               <option value="Ungraded Survey">Ungraded Survey</option>
//             </select>
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Assignment Group:</label>
//             <select
//               name="assignmentGroup"
//               value={quiz.assignmentGroup}
//               onChange={handleInputChange}
//               className="form-control"
//             >
//               <option value="Quizzes">Quizzes</option>
//               <option value="Exams">Exams</option>
//               <option value="Assignments">Assignments</option>
//               <option value="Project">Project</option>
//             </select>
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Shuffle Answers:</label>
//             <select
//               name="shuffleAnswers"
//               value={quiz.shuffleAnswers ? "true" : "false"}
//               onChange={(e) =>
//                 handleInputChange({
//                   target: {
//                     name: "shuffleAnswers",
//                     value: e.target.value === "true",
//                   },
//                 })
//               }
//               className="form-control"
//             >
//               <option value="true">True</option>
//               <option value="false">False</option>
//             </select>
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Time Limit:</label>
//             <input
//               type="number"
//               name="timeLimit"
//               value={quiz.timeLimit}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Multiple Attempts:</label>
//             <select
//               name="multipleAttempts"
//               value={quiz.multipleAttempts ? "true" : "false"}
//               onChange={(e) =>
//                 handleInputChange({
//                   target: {
//                     name: "multipleAttempts",
//                     value: e.target.value === "true",
//                   },
//                 })
//               }
//               className="form-control"
//             >
//               <option value="true">True</option>
//               <option value="false">False</option>
//             </select>
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Show Correct Answers:</label>
//             <select
//               name="showCorrectAnswers"
//               value={quiz.showCorrectAnswers}
//               onChange={handleInputChange}
//               className="form-control"
//             >
//               <option value="Always">Always</option>
//               <option value="After Due Date">After Due Date</option>
//               <option value="Never">Never</option>
//             </select>
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Access Code:</label>
//             <input
//               type="text"
//               name="accessCode"
//               value={quiz.accessCode}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label>One Question at a Time:</label>
//             <select
//               name="oneQuestionAtATime"
//               value={quiz.oneQuestionAtATime ? "true" : "false"}
//               onChange={(e) =>
//                 handleInputChange({
//                   target: {
//                     name: "oneQuestionAtATime",
//                     value: e.target.value === "true",
//                   },
//                 })
//               }
//               className="form-control"
//             >
//               <option value="true">True</option>
//               <option value="false">False</option>
//             </select>
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Webcam Required:</label>
//             <select
//               name="webcamRequired"
//               value={quiz.webcamRequired ? "true" : "false"}
//               onChange={(e) =>
//                 handleInputChange({
//                   target: {
//                     name: "webcamRequired",
//                     value: e.target.value === "true",
//                   },
//                 })
//               }
//               className="form-control"
//             >
//               <option value="true">True</option>
//               <option value="false">False</option>
//             </select>
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Lock Questions After Answering:</label>
//             <select
//               name="lockQuestionsAfterAnswering"
//               value={quiz.lockQuestionsAfterAnswering ? "true" : "false"}
//               onChange={(e) =>
//                 handleInputChange({
//                   target: {
//                     name: "lockQuestionsAfterAnswering",
//                     value: e.target.value === "true",
//                   },
//                 })
//               }
//               className="form-control"
//             >
//               <option value="true">True</option>
//               <option value="false">False</option>
//             </select>
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Due Date:</label>
//             <input
//               type="date"
//               name="due"
//               value={quiz.due}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Available Date:</label>
//             <input
//               type="date"
//               name="availableDate"
//               value={quiz.availableDate}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Until Date:</label>
//             <input
//               type="date"
//               name="untilDate"
//               value={quiz.untilDate}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//         </form>
//       )}

//       {qid && activeTab === "questions" && (
//         <div className="questions-tab">
//           <QuizQuestionsEditor quizId={qid} />
//         </div>
//       )}

//       <div className="actions">
//         <br />

//         <button
//           onClick={handleSave}
//           style={{
//             background: "none",
//             border: "none",
//             color: "red",
//             fontSize: "16px",
//             marginRight: "15px",
//             cursor: "pointer",
//           }}
//         >
//           Save
//         </button>
//         {/* <button onClick={handleSaveAndPublish} style={{
//             background: "none", // 'none' should be a string
//             border: "none",
//             color: "red",
//             fontSize: "16px", // camelCase
//             marginRight: "15px", // camelCase
//             cursor: "pointer",
//           }}>Save & Publish</button> */}

//         <button
//           onClick={handleCancel}
//           style={{
//             background: "none", // 'none' should be a string
//             border: "none",
//             color: "red",
//             fontSize: "16px", // camelCase
//             marginRight: "15px", // camelCase
//             cursor: "pointer",
//           }}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as client from "./client";
import "./index.css";
import QuizQuestionsEditor from "./QuizQuestionsEditor";

export default function QuizEditor() {
  const { cid, qid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("details");
  const [loading, setLoading] = useState(true);
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
    howManyAttempts: 0,
  });

  const fetchQuizDetails = async (qid:any) => {
    try {
      const fetchedQuiz = await client.findQuizById(qid);
      setQuiz(fetchedQuiz[0]);
    } catch (error) {
      console.error("Failed to fetch quiz details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (qid) {
      fetchQuizDetails(qid);
    }
  }, [qid]);

  if (loading) {
    return <div>Loading quiz details...</div>;
  }

  if (!quiz) {
    return <div>No quiz found or failed to load quiz details.</div>;
  }

  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setQuiz({
      ...quiz,
      [name]: type === "checkbox" ? checked : type === "number" ? parseInt(value) : value,
    });
  };

  const handleSave = () => {
    if (qid) {
      client.updateQuiz(qid, quiz).then(() => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
      });
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
  };

  return (
    <div
      id="wd-quiz-editor"
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <div className="mb-3">
        <button
          className={`tab-button ${activeTab === "details" ? "active" : ""}`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={`tab-button ${activeTab === "questions" ? "active" : ""}`}
          onClick={() => setActiveTab("questions")}
        >
          Questions
        </button>
      </div>

      <hr />

      {activeTab === "details" && (
        <form className="details-tab">
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="name"
              value={quiz.name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={quiz.description}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <br />

          <div className="form-group">
            <label>Number of Attempts:</label>
            <input
              type="number"
              name="howManyAttempts"
              value={quiz.howManyAttempts}
              onChange={handleInputChange}
              className="form-control"
              min="1"
            />
          </div>

          <div className="form-group">
            <label>Quiz Type:</label>
            <select
              name="quizType"
              value={quiz.quizType}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="Graded Quiz">Graded Quiz</option>
              <option value="Practice Quiz">Practice Quiz</option>
              <option value="Graded Survey">Graded Survey</option>
              <option value="Ungraded Survey">Ungraded Survey</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Assignment Group:</label>
            <select
              name="assignmentGroup"
              value={quiz.assignmentGroup}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
              <option value="Assignments">Assignments</option>
              <option value="Project">Project</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Shuffle Answers:</label>
            <select
              name="shuffleAnswers"
              value={quiz.shuffleAnswers ? "true" : "false"}
              onChange={(e) =>
                handleInputChange({
                  target: {
                    name: "shuffleAnswers",
                    value: e.target.value === "true",
                  },
                })
              }
              className="form-control"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Time Limit:</label>
            <input
              type="number"
              name="timeLimit"
              value={quiz.timeLimit}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Multiple Attempts:</label>
            <select
              name="multipleAttempts"
              value={quiz.multipleAttempts ? "true" : "false"}
              onChange={(e) =>
                handleInputChange({
                  target: {
                    name: "multipleAttempts",
                    value: e.target.value === "true",
                  },
                })
              }
              className="form-control"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Show Correct Answers:</label>
            <select
              name="showCorrectAnswers"
              value={quiz.showCorrectAnswers}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="Always">Always</option>
              <option value="After Due Date">After Due Date</option>
              <option value="Never">Never</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Access Code:</label>
            <input
              type="text"
              name="accessCode"
              value={quiz.accessCode}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label>One Question at a Time:</label>
            <select
              name="oneQuestionAtATime"
              value={quiz.oneQuestionAtATime ? "true" : "false"}
              onChange={(e) =>
                handleInputChange({
                  target: {
                    name: "oneQuestionAtATime",
                    value: e.target.value === "true",
                  },
                })
              }
              className="form-control"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Webcam Required:</label>
            <select
              name="webcamRequired"
              value={quiz.webcamRequired ? "true" : "false"}
              onChange={(e) =>
                handleInputChange({
                  target: {
                    name: "webcamRequired",
                    value: e.target.value === "true",
                  },
                })
              }
              className="form-control"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Lock Questions After Answering:</label>
            <select
              name="lockQuestionsAfterAnswering"
              value={quiz.lockQuestionsAfterAnswering ? "true" : "false"}
              onChange={(e) =>
                handleInputChange({
                  target: {
                    name: "lockQuestionsAfterAnswering",
                    value: e.target.value === "true",
                  },
                })
              }
              className="form-control"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Due Date:</label>
            <input
              type="date"
              name="due"
              value={quiz.due}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Available Date:</label>
            <input
              type="date"
              name="availableDate"
              value={quiz.availableDate}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Until Date:</label>
            <input
              type="date"
              name="untilDate"
              value={quiz.untilDate}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

        </form>
      )}

      {qid && activeTab === "questions" && (
        <div className="questions-tab">
          <QuizQuestionsEditor quizId={qid} />
        </div>
      )}

      <div className="actions">
        <br />

        <button
          onClick={handleSave}
          style={{
            background: "none",
            border: "none",
            color: "red",
            fontSize: "16px",
            marginRight: "15px",
            cursor: "pointer",
          }}
        >
          Save
        </button>

        <button
          onClick={handleCancel}
          style={{
            background: "none",
            border: "none",
            color: "red",
            fontSize: "16px",
            marginRight: "15px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
