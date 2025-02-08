// import React, { useState, useEffect } from "react";
// import * as client from "./client";
// import "./index.css"

// export default function QuizQuestionsEditor({ quizId }: { quizId: string }) {
//   type Question = {
//     type: string;
//     title: string;
//     points: number;
//     content: string;
//     options?: string[];
//     correctAnswer?: string | boolean;
//     possibleAnswers?: string[];
//   };

//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [editingQuestionIndex, setEditingQuestionIndex] = useState<number | null>(null);
//   const [newQuestion, setNewQuestion] = useState<Question>({
//     type: "Multiple Choice",
//     title: "",
//     points: 0,
//     content: "",
//     options: [""],
//     correctAnswer: "",
//   });

//   useEffect(() => {
//     if (quizId) {
//         fetchQuestions(quizId);
//     //   client.findQuizById(quizId).then((quizData) => {
//     //     console.log()
//     //     if (quizData && quizData[0]?.questions) {
//     //       setQuestions(quizData[0].questions);
//     //     }
//     //   });
//     }
//   }, [quizId]);

//   const fetchQuestions = async (quizId: string) => {
//     try {
//       const quizFetchedArray = await client.findQuizById(quizId);
//       const quizFetched = quizFetchedArray[0];
//       console.log("quizFetched in fetchQuestions in QuizQuestionsEditor: ", quizFetched);

//       if (quizFetched) {
//         console.log("setQuestions in fetchQuestions in QuizQuestionsEditor: ", quizFetched.questions)
//         setQuestions(quizFetched.questions);
//       } else {
//         setQuestions([]); // Default to an empty array if questions are not present
//       }
//     } catch (error) {
//       console.error("Error fetching quiz questions:", error);
//       setQuestions([]); // Set questions to an empty array in case of error
//     }
//   };
//   const handleAddQuestion = () => {
//     setQuestions([...questions, newQuestion]);
//     setNewQuestion({
//       type: "Multiple Choice",
//       title: "",
//       points: 0,
//       content: "",
//       options: [""],
//       correctAnswer: "",
//     });
//     setEditingQuestionIndex(null);
//   };

//   const handleEditQuestion = (index: number) => {
//     setEditingQuestionIndex(index);
//     setNewQuestion(questions[index]);
//   };


// const handleSaveQuestion = async (index: number) => {
//     const questionToSave = { ...newQuestion };
  
//     // Ensure points are stored as a number
//     questionToSave.points = Number(newQuestion.points);
  
//     // Remove unnecessary fields based on the question type
//     if (questionToSave.type === "True/False") {
//       delete questionToSave.options; // Remove options for True/False questions
//     }
  
//     const updatedQuestions = [...questions];
//     updatedQuestions[index] = questionToSave;
//     setQuestions(updatedQuestions);
//     setEditingQuestionIndex(null);
  
//     try {
//       await client.updateQuiz(quizId, { questions: updatedQuestions });
//       console.log("Question saved successfully");
//     } catch (error) {
//       console.error("Error saving question:", error);
//     }
//   };
  


//   const saveQuiz = async () => {
//     try {
//       const quiz = {
//         questions,
//         points: questions.reduce((sum, q) => sum + q.points, 0),
//         questionsNumber: questions.length,
//       };
//       await client.updateQuiz(quizId, quiz);
//       console.log("Quiz saved darkfully");
//     } catch (error) {
//       console.error("Error saving quiz:", error);
//     }
//   };

//   const handleInputChange = (e: any) => {
//     const { name, value, type, checked } = e.target;
//     setNewQuestion({
//       ...newQuestion,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleOptionChange = (index: number, value: string) => {
//     const updatedOptions = [...(newQuestion.options || [])];
//     updatedOptions[index] = value;
//     setNewQuestion({ ...newQuestion, options: updatedOptions });
//   };

//   const handleAddOption = () => {
//     setNewQuestion({
//       ...newQuestion,
//       options: [...(newQuestion.options || []), ""],
//     });
//   };

//   const handleRemoveOption = (index: number) => {
//     const updatedOptions = newQuestion.options?.filter((_, i) => i !== index);
//     setNewQuestion({ ...newQuestion, options: updatedOptions });
//   };

//   const handleAddPossibleAnswer = () => {
//     setNewQuestion({
//       ...newQuestion,
//       possibleAnswers: [...(newQuestion.possibleAnswers || []), ""],
//     });
//   };

//   const handleRemovePossibleAnswer = (index: number) => {
//     const updatedPossibleAnswers = newQuestion.possibleAnswers?.filter((_, i) => i !== index);
//     setNewQuestion({ ...newQuestion, possibleAnswers: updatedPossibleAnswers });
//   };

//   return (
//     <div className="questions-tab">
//       <h3 style={{ textAlign: "center" }}>Questions</h3>
//       {questions.length === 0 ? (
//         <p>No questions added yet.</p>
//       ) : (
//         <ul className="questions-list">
//           {questions.map((question, index) => (
//             <li key={index} className="question-item">
//               {editingQuestionIndex === index ? (
//                 <div className="question-form">
//                   <div className="form-group">
//                     <label>Title: </label>
//                     <input
//                       type="text"
//                       name="title"
//                       value={newQuestion.title}
//                       onChange={handleInputChange}
//                       placeholder="Title"
//                       className="form-control"
//                     />
//                   </div>
  
//                   <div className="form-group">
//                     <label>Points: </label>
//                     <input
//                       type="number"
//                       name="points"
//                       value={newQuestion.points}
//                       onChange={handleInputChange}
//                       placeholder="Points"
//                       className="form-control"
//                     />
//                   </div>
  
//                   <div className="form-group">
//                     <label>Content: </label>
//                     <textarea
//                       name="content"
//                       value={newQuestion.content}
//                       onChange={handleInputChange}
//                       placeholder="Question"
//                       className="form-control"
//                     />
//                   </div>
  
//                   <div className="form-group">
//                     <label>Type: </label>
//                     <select
//                       value={newQuestion.type}
//                       onChange={(e) =>
//                         setNewQuestion({ ...newQuestion, type: e.target.value })
//                       }
//                       className="form-control"
//                     >
//                       <option value="Multiple Choice">Multiple Choice</option>
//                       <option value="True/False">True/False</option>
//                       <option value="Fill in the Blank">Fill in the Blank</option>
//                     </select>
//                   </div>
  
//                   {newQuestion.type === "Multiple Choice" && (
//                     <div className="form-group">
//                       {newQuestion.options?.map((option, i) => (
//                         <div key={i} className="option-group">
//                           <input
//                             type="radio"
//                             name="correctAnswer"
//                             value={option}
//                             checked={newQuestion.correctAnswer === option}
//                             onChange={() =>
//                               setNewQuestion({ ...newQuestion, correctAnswer: option })
//                             }
//                             className="form-radio"
//                           />
//                           <input
//                             type="text"
//                             value={option}
//                             onChange={(e) => handleOptionChange(i, e.target.value)}
//                             placeholder={`Option ${i + 1}`}
//                             className="form-control"
//                           />
//                           <button
//                             onClick={() => handleRemoveOption(i)}
//                             className="btn btn-danger me-2"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       ))}
//                       <button onClick={handleAddOption} className="btn btn-danger">Add Option</button>
//                     </div>
//                   )}
  
//                   {newQuestion.type === "True/False" && (
//                     <div className="form-group">
//                       <label>
//                         <input
//                           type="radio"
//                           name="correctAnswer"
//                           value="true"
//                           checked={newQuestion.correctAnswer === "true"}
//                           onChange={() => setNewQuestion({ ...newQuestion, correctAnswer: "true" })}
//                           className="form-radio"
//                         />
//                         True
//                       </label>
//                       <label>
//                         <input
//                           type="radio"
//                           name="correctAnswer"
//                           value="false"
//                           checked={newQuestion.correctAnswer === "false"}
//                           onChange={() => setNewQuestion({ ...newQuestion, correctAnswer: "false" })}
//                           className="form-radio me-2"
//                         />
//                         False
//                       </label>
//                     </div>
//                   )}
  
//                   {newQuestion.type === "Fill in the Blank" && (
//                     <div className="form-group">
//                       {newQuestion.possibleAnswers?.map((answer, i) => (
//                         <div key={i} className="option-group">
//                           <input
//                             type="text"
//                             value={answer}
//                             onChange={(e) =>
//                               setNewQuestion({
//                                 ...newQuestion,
//                                 possibleAnswers: newQuestion.possibleAnswers?.map((ans, idx) =>
//                                   idx === i ? e.target.value : ans
//                                 ),
//                               })
//                             }
//                             placeholder={`Possible Answer ${i + 1}`}
//                             className="form-control"
//                           />
//                           <button
//                             onClick={() => handleRemovePossibleAnswer(i)}
//                             className="btn btn-danger me-2"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       ))}
//                       <button onClick={handleAddPossibleAnswer} className="btn btn-danger">
//                         Add Possible Answer
//                       </button>
//                     </div>
//                   )}
  
//                   <div className="form-actions">
//                     <button onClick={() => handleSaveQuestion(index)} className="btn btn-dark">
//                       Save
//                     </button>
//                     <button onClick={() => setEditingQuestionIndex(null)} className="btn btn-secondary">
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div>
//                     <label><b>Question Title:</b> </label>
//                     <br/>
//                   <p>{question.title}</p>
//                   <label><b>Content: </b></label>
//                     <br/>
//                   <p>{question.content}</p>
//                   <label><b>Points:</b> </label>
//                     <br/>
//                   <p>Points: {question.points}</p>
//                   <button onClick={() => handleEditQuestion(index)} className="btn btn-danger">
//                     Edit
//                   </button>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleAddQuestion} className="btn btn-danger me-2">New Question</button>
//       <button onClick={saveQuiz} className="btn btn-dark">Save Quiz</button>
//       <p>Total Points: {questions.reduce((sum, q) => sum + q.points, 0)}</p>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import * as client from "./client";
import "./index.css";

export default function QuizQuestionsEditor({ quizId }: { quizId: string }) {
  type Question = {
    type: string;
    title: string;
    points: number;
    content: string;
    options?: string[];
    correctAnswer?: string | boolean;
    possibleAnswers?: string[];
  };

  const [questions, setQuestions] = useState<Question[]>([]);
  const [editingQuestionIndex, setEditingQuestionIndex] = useState<number | null>(null);
  const [newQuestion, setNewQuestion] = useState<Question>({
    type: "Multiple Choice",
    title: "",
    points: 0,
    content: "",
    options: [""],
    correctAnswer: "",
  });

  useEffect(() => {
    if (quizId) {
      fetchQuestions(quizId);
    }
  }, [quizId]);

  const fetchQuestions = async (quizId: string) => {
    try {
      const quizFetchedArray = await client.findQuizById(quizId);
      const quizFetched = quizFetchedArray[0];
      console.log("quizFetched in fetchQuestions in QuizQuestionsEditor: ", quizFetched);

      if (quizFetched) {
        console.log("setQuestions in fetchQuestions in QuizQuestionsEditor: ", quizFetched.questions);
        setQuestions(quizFetched.questions);
      } else {
        setQuestions([]); // Default to an empty array if questions are not present
      }
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      setQuestions([]); // Set questions to an empty array in case of error
    }
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({
      type: "Multiple Choice",
      title: "",
      points: 0,
      content: "",
      options: [""],
      correctAnswer: "",
    });
    setEditingQuestionIndex(null);
  };

  const handleEditQuestion = (index: number) => {
    setEditingQuestionIndex(index);
    setNewQuestion(questions[index]);
  };

  const handleSaveQuestion = async (index: number) => {
    const questionToSave = { ...newQuestion };
  
    // Ensure points are stored as a number
    questionToSave.points = Number(newQuestion.points);
  
    // Remove unnecessary fields based on the question type
    if (questionToSave.type === "True/False") {
      delete questionToSave.options; // Remove options for True/False questions
    }
  
    const updatedQuestions = [...questions];
    updatedQuestions[index] = questionToSave;
    setQuestions(updatedQuestions);
    setEditingQuestionIndex(null);
  
    try {
      await client.updateQuiz(quizId, { questions: updatedQuestions });
      console.log("Question saved successfully");
    } catch (error) {
      console.error("Error saving question:", error);
    }
  };

  const saveQuiz = async () => {
    try {
      const quiz = {
        questions,
        points: questions.reduce((sum, q) => sum + q.points, 0),
        questionsNumber: questions.length,
      };
      await client.updateQuiz(quizId, quiz);
      console.log("Quiz saved successfully");
    } catch (error) {
      console.error("Error saving quiz:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setNewQuestion({
      ...newQuestion,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleContentChange = (value: string) => {
    setNewQuestion({
      ...newQuestion,
      content: value,
    });
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...(newQuestion.options || [])];
    updatedOptions[index] = value;
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  const handleAddOption = () => {
    setNewQuestion({
      ...newQuestion,
      options: [...(newQuestion.options || []), ""],
    });
  };

  const handleRemoveOption = (index: number) => {
    const updatedOptions = newQuestion.options?.filter((_, i) => i !== index);
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  const handleAddPossibleAnswer = () => {
    setNewQuestion({
      ...newQuestion,
      possibleAnswers: [...(newQuestion.possibleAnswers || []), ""],
    });
  };

  const handleRemovePossibleAnswer = (index: number) => {
    const updatedPossibleAnswers = newQuestion.possibleAnswers?.filter((_, i) => i !== index);
    setNewQuestion({ ...newQuestion, possibleAnswers: updatedPossibleAnswers });
  };

  return (
    <div className="questions-tab">
      <h3 style={{ textAlign: "center" }}>Questions</h3>
      {questions.length === 0 ? (
        <p>No questions added yet.</p>
      ) : (
        <ul className="questions-list">
          {questions.map((question, index) => (
            <li key={index} className="question-item">
              {editingQuestionIndex === index ? (
                <div className="question-form">
                  <div className="form-group">
                    <label>Title: </label>
                    <input
                      type="text"
                      name="title"
                      value={newQuestion.title}
                      onChange={handleInputChange}
                      placeholder="Title"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Points: </label>
                    <input
                      type="number"
                      name="points"
                      value={newQuestion.points}
                      onChange={handleInputChange}
                      placeholder="Points"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Content: </label>
                    <ReactQuill
                      value={newQuestion.content}
                      onChange={handleContentChange}
                      placeholder="Question content"
                      className="form-control"
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, false] }],
                          ["bold", "italic", "underline"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["clean"],
                        ],
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>Type: </label>
                    <select
                      value={newQuestion.type}
                      onChange={(e) =>
                        setNewQuestion({ ...newQuestion, type: e.target.value })
                      }
                      className="form-control"
                    >
                      <option value="Multiple Choice">Multiple Choice</option>
                      <option value="True/False">True/False</option>
                      <option value="Fill in the Blank">Fill in the Blank</option>
                    </select>
                  </div>

                  {newQuestion.type === "Multiple Choice" && (
                    <div className="form-group">
                      {newQuestion.options?.map((option, i) => (
                        <div key={i} className="option-group">
                          <input
                            type="radio"
                            name="correctAnswer"
                            value={option}
                            checked={newQuestion.correctAnswer === option}
                            onChange={() =>
                              setNewQuestion({ ...newQuestion, correctAnswer: option })
                            }
                            className="form-radio"
                          />
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(i, e.target.value)}
                            placeholder={`Option ${i + 1}`}
                            className="form-control"
                          />
                          <button
                            onClick={() => handleRemoveOption(i)}
                            className="btn btn-danger me-2"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button onClick={handleAddOption} className="btn btn-danger">Add Option</button>
                    </div>
                  )}

                  {newQuestion.type === "True/False" && (
                    <div className="form-group">
                      <label>
                        <input
                          type="radio"
                          name="correctAnswer"
                          value="true"
                          checked={newQuestion.correctAnswer === "true"}
                          onChange={() => setNewQuestion({ ...newQuestion, correctAnswer: "true" })}
                          className="form-radio"
                        />
                        True
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="correctAnswer"
                          value="false"
                          checked={newQuestion.correctAnswer === "false"}
                          onChange={() => setNewQuestion({ ...newQuestion, correctAnswer: "false" })}
                          className="form-radio me-2"
                        />
                        False
                      </label>
                    </div>
                  )}

                  {newQuestion.type === "Fill in the Blank" && (
                    <div className="form-group">
                      {newQuestion.possibleAnswers?.map((answer, i) => (
                        <div key={i} className="option-group">
                          <input
                            type="text"
                            value={answer}
                            onChange={(e) =>
                              setNewQuestion({
                                ...newQuestion,
                                possibleAnswers: newQuestion.possibleAnswers?.map((ans, idx) =>
                                  idx === i ? e.target.value : ans
                                ),
                              })
                            }
                            placeholder={`Possible Answer ${i + 1}`}
                            className="form-control"
                          />
                          <button
                            onClick={() => handleRemovePossibleAnswer(i)}
                            className="btn btn-danger me-2"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button onClick={handleAddPossibleAnswer} className="btn btn-danger">
                        Add Possible Answer
                      </button>
                    </div>
                  )}

                  <div className="form-actions">
                    <button onClick={() => handleSaveQuestion(index)} className="btn btn-dark">
                      Save
                    </button>
                    <button onClick={() => setEditingQuestionIndex(null)} className="btn btn-secondary">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <label><b>Question Title:</b> </label>
                  <br/>
                  <p>{question.title}</p>
                  <label><b>Content: </b></label>
                  <br/>
                  <p>{question.content}</p>
                  <label><b>Points:</b> </label>
                  <br/>
                  <p>Points: {question.points}</p>
                  <button onClick={() => handleEditQuestion(index)} className="btn btn-danger">
                    Edit
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleAddQuestion} className="btn btn-danger me-2">New Question</button>
      <button onClick={saveQuiz} className="btn btn-dark">Save Quiz</button>
      <p>Total Points: {questions.reduce((sum, q) => sum + q.points, 0)}</p>
    </div>
  );
}
