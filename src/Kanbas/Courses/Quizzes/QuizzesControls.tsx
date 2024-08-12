import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import QuizEditor from "./QuizEditor";

export default function QuizzesControls({
  quizName,
  setQuizName,
  addQuiz,
}: {
  quizName: string;
  setQuizName: (title: string) => void;
  addQuiz: () => void;
}) {
  return (
    // for adding quizzes
    <div id="wd-quizzes-controls" className="text-nowrap">
      <button
        id="wd-add-quizzes-btn"
        className="btn btn-lg btn-danger me-1 float-end"
        data-bs-toggle="modal"
        data-bs-target="#wd-add-quizzes-dialog"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} 
        data-bs-toggle="modal" data-bs-target="#wd-add-quiz-dialog"/>
        Quiz
      </button>

      {/* the create quiz editor window */}
      <QuizEditor   dialogTitle="Add Module" 
                    quizName={quizName}
                    setQuizName={setQuizName} 
                    addQuiz={addQuiz} />
    </div>
  );
}
