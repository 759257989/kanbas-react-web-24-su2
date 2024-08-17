import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import NewQuizEditor from "./NewQuizEditor";

export default function QuizzesControls({
  quizName,
  setQuizName,
  addQuiz,
  quizDescription,
  setQuizDescription,
  quizDue,
  setQuizDue,
  quizAvailableDate,
  setQuizAvailableDate,
  quizPoints,
  setQuizPoints,
  quizQuestionsNumber,
  setQuizQuestionsNumber
}: {
  quizName: string;
  setQuizName: (name: string) => void;
  quizDescription: string;
  setQuizDescription: (desc: string) => void;
  quizDue: Date | null;
  setQuizDue: (due: Date | null) => void;
  quizAvailableDate: Date | null;
  setQuizAvailableDate: (available: Date | null) => void;
  quizPoints: number;
  setQuizPoints: (points: number) => void;
  quizQuestionsNumber: number;
  setQuizQuestionsNumber: (questionsNum: number) => void;
  addQuiz: () => void;
}) {
  return (
    // for adding quizzes
    <div id="wd-quizzes-controls" className="text-nowrap">
      <button
        id="wd-add-quizzes-btn"
        className="btn btn-lg btn-danger me-1 float-end"
        data-bs-toggle="modal"
        data-bs-target="#wd-add-quiz-dialog"
      >
        + Quiz
      </button>

      {/* the create quiz editor window */}
      <NewQuizEditor
        dialogTitle="Add Quiz"
        quizName={quizName}
        setQuizName={setQuizName}
        quizDescription={quizDescription}
        setQuizDescription={setQuizDescription}
        quizDue={quizDue?? new Date()}
        setQuizDue={setQuizDue}
        quizAvailableDate={quizAvailableDate?? new Date()}
        setQuizAvailableDate={setQuizAvailableDate}
        quizPoints={quizPoints}
        setQuizPoints={setQuizPoints}
        quizQuestionsNumber={quizQuestionsNumber}
        setQuizQuestionsNumber={setQuizQuestionsNumber}
        addQuiz={addQuiz}
      />
    </div>
  );
}
