import { IoEllipsisVertical } from "react-icons/io5";
import {BsPlus } from "react-icons/bs"
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";

// export default function QuizControlButtons({ quizId, deleteQuiz, editQuiz }: {
//     quizId: string; deleteQuiz: (quizId: string) => void;
//     editQuiz: (quizId: string) => void }) {
//     return (
//       <div className="float-end">
//         <FaPencil onClick={() => editQuiz(quizId)} className="text-primary me-3" />
//         <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteQuiz(quizId)}/>
//         <GreenCheckmark />
//         <BsPlus className="fs-1" />
//         <IoEllipsisVertical className="fs-4" />
//       </div>
//   );}



export default function QuizControlButtons({ quizId, deleteQuiz, updatePublishStatusButton }: {
  quizId: string; deleteQuiz: (quizId: string) => void; updatePublishStatusButton: (quizId: string)=> void;})
   {
  return (
    <div className="float-end">
      {/* // <FaPencil onClick={() => editQuiz(quizId)} className="text-primary me-3" /> */}
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteQuiz(quizId)}/>
      <GreenCheckmark className=" me-2 mb-1" onClick={() => updatePublishStatusButton(quizId)}/>
      <FaCircleXmark className="text-danger me-2 mb-1" onClick={() => updatePublishStatusButton(quizId)}/>
      
    </div>
);}