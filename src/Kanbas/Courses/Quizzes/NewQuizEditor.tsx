// export default function NewQuizEditor({
//   dialogTitle,
//   quizName,
//   setQuizName,
//   quizDescription,
//   setQuizDescription,
//   quizDue,
//   setQuizDue,
//   quizAvailableDate,
//   setQuizAvailableDate,
//   quizPoints,
//   setQuizPoints,
//   quizQuestionsNumber,
//   setQuizQuestionsNumber,
//   addQuiz
// }: {
//   dialogTitle: string;
//   quizName: string;
//   setQuizName: (name: string) => void;
//   quizDescription: string;
//   setQuizDescription: (desc: string) => void;
//   quizDue: Date;
//   setQuizDue: (due: Date) => void;
//   quizAvailableDate: Date;
//   setQuizAvailableDate: (available: Date) => void;
//   quizPoints: number;
//   setQuizPoints: (points: number) => void;
//   quizQuestionsNumber: number;
//   setQuizQuestionsNumber: (questionsNum: number) => void;
//   addQuiz: () => void;
// }) {
//   return (
//     <div
//       id="wd-add-quiz-dialog"
//       className="modal fade"
//       data-bs-backdrop="static"
//       data-bs-keyboard="false"
//     >
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h1 className="modal-title fs-5" id="staticBackdropLabel">
//               {dialogTitle}{" "}
//             </h1>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="modal"
//             ></button>
//           </div>


//           <div className="modal-body">
//             <label htmlFor="wd-description" className="form-label">
//             Quiz Name
//             </label>
//             <input
//               className="form-control"
//               value={quizName}
//               placeholder="New Quiz"
//               onChange={(e) => setQuizName(e.target.value)}
//             />
//           </div>

//           <div className="modal-body">
//             <label htmlFor="wd-description" className="form-label">
//               Description
//             </label>
//             <textarea id="wd-description" className="form-control">
//               New Quiz Description.
//             </textarea>
//           </div>

//           <div className="modal-body ">
//             <label htmlFor="wd-points" className="form-label">
//               Points
//             </label>
//             <input id="wd-points" value={100} className="form-control" />
//           </div>

//           <div className="modal-body ">
//             <label htmlFor="wd-due-date" className="form-label">
//               Due
//             </label>

//             <input
//               type="date"
//               id="wd-due-date"
//               value="2011-11-22"
//               className="form-control"
//             />
//           </div>

//           <div className="modal-body ">
//             <label htmlFor="wd-available-from" className="form-label">
//               Available from
//             </label>

//             <input
//               type="date"
//               id="wd-available-from"
//               value="2011-11-22"
//               className="form-control"
//             />
//           </div>

//           <div className="modal-body ">
//             <label htmlFor="wd-available-Until" className="form-label">
//               Available Until
//             </label>

//             <input
//               type="date"
//               id="wd-available-Until"
//               value="2011-11-29"
//               className="form-control"
//             />
//           </div>

//           <div className="modal-footer">
//             <button
//               type="button"
//               className="btn btn-secondary"
//               data-bs-dismiss="modal"
//             >
//               Cancel{" "}
//             </button>
//             <button
//               onClick={addQuiz}
//               type="button"
//               data-bs-dismiss="modal"
//               className="btn btn-danger"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






export default function NewQuizEditor({
  dialogTitle,
  quizName,
  setQuizName,
  quizDescription,
  setQuizDescription,
  quizDue,
  setQuizDue,
  quizAvailableDate,
  setQuizAvailableDate,
  quizPoints,
  setQuizPoints,
  quizQuestionsNumber,
  setQuizQuestionsNumber,
  addQuiz
}: {
  dialogTitle: string;
  quizName: string;
  setQuizName: (name: string) => void;
  quizDescription: string;
  setQuizDescription: (desc: string) => void;
  quizDue: Date;
  setQuizDue: (due: Date) => void;
  quizAvailableDate: Date;
  setQuizAvailableDate: (available: Date) => void;
  quizPoints: number;
  setQuizPoints: (points: number) => void;
  quizQuestionsNumber: number;
  setQuizQuestionsNumber: (questionsNum: number) => void;
  addQuiz: () => void;
}) {
  return (
    <div
      id="wd-add-quiz-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {dialogTitle}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <label htmlFor="wd-quiz-name" className="form-label">
              Quiz Name
            </label>
            <input
              id="wd-quiz-name"
              className="form-control"
              value={quizName}
              placeholder="New Quiz"
              onChange={(e) => setQuizName(e.target.value)}
            />
          </div>

          <div className="modal-body">
            <label htmlFor="wd-description" className="form-label">
              Description
            </label>
            <textarea
              id="wd-description"
              className="form-control"
              value={quizDescription}
              onChange={(e) => setQuizDescription(e.target.value)}
              placeholder="New Quiz Description"
            />
          </div>

          <div className="modal-body">
            <label htmlFor="wd-points" className="form-label">
              Points
            </label>
            <input
              id="wd-points"
              type="number"
              className="form-control"
              value={quizPoints}
              onChange={(e) => setQuizPoints(Number(e.target.value))}
            />
          </div>

          <div className="modal-body">
            <label htmlFor="wd-questions-number" className="form-label">
              Number of Questions
            </label>
            <input
              id="wd-questions-number"
              type="number"
              className="form-control"
              value={quizQuestionsNumber}
              onChange={(e) => setQuizQuestionsNumber(Number(e.target.value))}
            />
          </div>

          <div className="modal-body">
            <label htmlFor="wd-due-date" className="form-label">
              Due Date
            </label>
            <input
              id="wd-due-date"
              type="date"
              className="form-control"
              value={quizDue.toISOString().substring(0, 10)}
              onChange={(e) => setQuizDue(new Date(e.target.value))}
            />
          </div>

          <div className="modal-body">
            <label htmlFor="wd-available-date" className="form-label">
              Available Date
            </label>
            <input
              id="wd-available-date"
              type="date"
              className="form-control"
              value={quizAvailableDate.toISOString().substring(0, 10)}
              onChange={(e) => setQuizAvailableDate(new Date(e.target.value))}
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              onClick={addQuiz}
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
