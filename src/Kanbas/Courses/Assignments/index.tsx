// import "./index.css";
// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { TfiWrite } from "react-icons/tfi";
// import { IoEllipsisVertical } from "react-icons/io5";

// import { useParams } from "react-router-dom";
// // import ModuleControlButtons from '../Modules/ModulesControls';

// export default function Assignments() {
  
//   const { cid } = useParams();
//   return (
//     <div id="wd-assignments">
//       <div>
//         <input
//           id="wd-search-assignment"
//           placeholder="Search for Assignments"
//           className=""
//         />

//         <button
//           id="wd-add-assignment"
//           className="btn btn-lg btn-danger me-1 float-end"
//         >
//           + Assignment
//         </button>
//         <button
//           id="wd-add-assignment-group"
//           className="btn btn-lg btn-secondary me-1 float-end"
//         >
//           + Group
//         </button>
//         <br />
//         <br />
//         <br />
//         <br />
//         {/* <h3 id="wd-assignments-title">
//         ASSIGNMENTS 40% of Total <button>+</button>
//       </h3> */}
//       </div>

//       <ul id="wd-modules" className="list-group rounded-0">
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
//             <BsGripVertical className="me-2 fs-3" />
//             ASSIGNMENTS
//             <span className="ms-auto me-2 border rounded p-1 bg-gray">
//               40% of Total
//             </span>
//             <button className="btn">+</button>
//             <IoEllipsisVertical className="fs-4" />
//           </div>

//           <ul
//             id="wd-assignment-list"
//             className="wd-lessons list-group rounded-0"
//           >
//             <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
//               <a
//                 href="#/Kanbas/Courses/1234/Assignments/123"
//                 className="d-flex align-items-center w-100 text-decoration-none text-dark"
//               >
//                 <div className="me-2 fs-3">
//                   <BsGripVertical />
//                 </div>
//                 <div className="me-2 fs-3" style={{ color: "green" }}>
//                   <TfiWrite />
//                 </div>
//                 <div className="flex-grow-1">
//                   <p className="mb-1">
//                     <b>A1</b>
//                   </p>
//                   <LessonControlButtons />
//                   <p className="mb-0">
//                     <span style={{ color: "red" }}>Multiple Modules </span> |{" "}
//                     <b>Not available until</b> May 6 at 12:00am | Due May 13 at
//                     11:59pm | 100 pts
//                   </p>
//                 </div>
//               </a>
//             </li>

//             <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
//               <a
//                 href="#/Kanbas/Courses/1234/Assignments/123"
//                 className="d-flex align-items-center w-100 text-decoration-none text-dark"
//               >
//                 <div className="me-2 fs-3">
//                   <BsGripVertical />
//                 </div>
//                 <div className="me-2 fs-3" style={{ color: "green" }}>
//                   <TfiWrite />
//                 </div>
//                 <div className="flex-grow-1">
//                   <p className="mb-1">
//                     <b>A2</b>
//                   </p>
//                   <LessonControlButtons />
//                   <p className="mb-0">
//                     <span style={{ color: "red" }}>Multiple Modules </span> |{" "}
//                     <b>Not available until</b> May 16 at 12:00am | Due May 19 at
//                     11:59pm | 100 pts
//                   </p>
//                 </div>
//               </a>
//             </li>

//             <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
//               <a
//                 href="#/Kanbas/Courses/1234/Assignments/123"
//                 className="d-flex align-items-center w-100 text-decoration-none text-dark"
//               >
//                 <div className="me-2 fs-3">
//                   <BsGripVertical />
//                 </div>
//                 <div className="me-2 fs-3" style={{ color: "green" }}>
//                   <TfiWrite />
//                 </div>
//                 <div className="flex-grow-1">
//                   <p className="mb-1">
//                     <b>A3</b>
//                   </p>
//                   <LessonControlButtons />
//                   <p className="mb-0">
//                     <span style={{ color: "red" }}>Multiple Modules </span> |{" "}
//                     <b>Not available until</b> May 26 at 12:00am | Due May 29 at
//                     11:59pm | 100 pts
//                   </p>
//                 </div>
//               </a>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }


// import "./index.css";
// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { TfiWrite } from "react-icons/tfi";
// import { IoEllipsisVertical } from "react-icons/io5";
// import * as db from "../../Database";
// import { useParams } from "react-router-dom";
// import ModuleControlButtons from "../Modules/ModuleControlButtons";
// import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";
// import {useSelector, useDispatch} from "react-redux"


// // import ModuleControlButtons from '../Modules/ModulesControls';

// export default function Assignments() {
//   const { cid } = useParams();
  
//   const dispatch = useDispatch();
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);

//   return (
//     <div id="wd-assignments">
//       <div>
//         <input
//           id="wd-search-assignment"
//           placeholder="Search for Assignments"
//           className=""
//         />

//         <button
//           id="wd-add-assignment"
//           className="btn btn-lg btn-danger me-1 float-end"
//         >
//           + Assignment
//         </button>

//         <button
//           id="wd-add-assignment-group"
//           className="btn btn-lg btn-secondary me-1 float-end"
//         >
//           + Group
//         </button>
//         <br />
//         <br />
//         <br />
//         <br />
//         {/* <h3 id="wd-assignments-title">
//         ASSIGNMENTS 40% of Total <button>+</button>
//       </h3> */}
//       </div>

//       <ul id="wd-modules" className="list-group rounded-0">
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
//             <BsGripVertical className="me-2 fs-3" />
//             ASSIGNMENTS
//             <span className="ms-auto me-2 border rounded p-1 bg-gray">
//               40% of Total
//             </span>
//             <button className="btn">+</button>
//             <IoEllipsisVertical className="fs-4" />
//           </div>

//           <ul id="wd-assignment-list" className="wd-lessons list-group rounded-0">
//             {assignments
//               .filter((assignment) => assignment.course === cid)
//               .map((assignment) => (
//                 <a
//                 href= {`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
//                 className="d-flex align-items-center w-100 text-decoration-none text-dark"
//               >
//                 <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
//                   <div className="me-2 fs-3">
//                     <BsGripVertical className="me-2 fs-3" />
//                   </div>
//                   <div className="me-2 fs-3" style={{ color: "green" }}>
//                     <TfiWrite />
//                   </div>
//                   <div className="flex-grow-1">
//                     <p className="mb-1">
//                       <b>{assignment.title}</b>
//                     </p>
//                     <LessonControlButtons />
//                     <p className="mb-0">
//                       <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
//                       <b>Not available until</b> May 6 at 12:00am | Due May 13 at
//                       11:59pm | 100 pts
//                     </p>
//                   </div>
//                 </li>
//                 </a>
//               ))}
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }


// import "./index.css";
// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { TfiWrite } from "react-icons/tfi";
// import { IoEllipsisVertical } from "react-icons/io5";
// import * as db from "../../Database";
// import { useParams } from "react-router-dom";
// import ModuleControlButtons from "../Modules/ModuleControlButtons";
// import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";
// import {useSelector, useDispatch} from "react-redux"
// import React, {useState} from "react";
// import AssignmentControls from "./AssignmentControls"
// import AssignmentControlButtons from "./AssignmentControlButtons";

// import NewAssignmentEditor from "./NewAssignmentEditor";
// // import ModuleControlButtons from '../Modules/ModulesControls';

// export default function Assignments() {
//   const { cid } = useParams();
//   const [assignmentName, setAssignmentName] = useState("");
//   const dispatch = useDispatch();
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);

//   return (
//     <div id="wd-assignments">
//       <div>
//         <AssignmentControls 
        
//         setAssignmentName={setAssignmentName} 
//         assignmentName={assignmentName} 
//         addAssignment={() => {
//           dispatch(addAssignment({ title: assignmentName, course: cid }));
//           setAssignmentName("");
//         }}/>
//       </div>

//       <ul id="wd-modules" className="list-group rounded-0">
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
//             <BsGripVertical className="me-2 fs-3" />
//             ASSIGNMENTS
//             <span className="ms-auto me-2 border rounded p-1 bg-gray">
//               40% of Total
//             </span>
//             <button className="btn">+</button>
//             <IoEllipsisVertical className="fs-4" />
//           </div>

//           <ul id="wd-assignment-list" className="wd-lessons list-group rounded-0">
//             {assignments
//               .filter((assignment:any) => assignment.course === cid)
//               .map((assignment:any) => (
//                 <a
//                 href= {`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
//                 className="d-flex align-items-center w-100 text-decoration-none text-dark"
//               >
//                 <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
//                   <div className="me-2 fs-3">
//                     <BsGripVertical className="me-2 fs-3" />
//                   </div>
//                   <div className="me-2 fs-3" style={{ color: "green" }}>
//                     <TfiWrite />
//                   </div>
//                   <div className="flex-grow-1">
//                     <p className="mb-1">
//                       <b>{assignment.title}</b>
//                     </p>
//                     <AssignmentControlButtons assignmentId={assignment._id}
//                     deleteAssignment={(assignmentId) => {
//                       dispatch(deleteAssignment(assignmentId))
//                     }}
//                     />

//                     <p className="mb-0">
//                       <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
//                       <b>Not available until</b> May 6 at 12:00am | Due May 13 at
//                       11:59pm | 100 pts
//                     </p>
//                   </div>
//                 </li>
//                 </a>
//               ))}
//           </ul>
//         </li>
//       </ul>

//     </div>
//   );
// }




import "./index.css";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TfiWrite } from "react-icons/tfi";
import { IoEllipsisVertical } from "react-icons/io5";
import * as db from "../../Database";
import { useParams } from "react-router-dom";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";

import NewAssignmentEditor from "./NewAssignmentEditor";

export default function Assignments() {
  const { cid } = useParams();
  const [assignmentName, setAssignmentName] = useState("");
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  return (
    <div id="wd-assignments">
      <div>
        <AssignmentControls 
          setAssignmentName={setAssignmentName} 
          assignmentName={assignmentName} 
          addAssignment={() => {
            dispatch(addAssignment({ title: assignmentName, course: cid }));
            setAssignmentName("");
          }}
        />
      </div>

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <span className="ms-auto me-2 border rounded p-1 bg-gray">
              40% of Total
            </span>
            <button className="btn">+</button>
            <IoEllipsisVertical className="fs-4" />
          </div>

          <ul id="wd-assignment-list" className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
                >
                  <a
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    className="d-flex align-items-center w-100 text-decoration-none text-dark"
                    onClick={(e) => e.stopPropagation()} // Prevent anchor link click propagation
                  >
                    <div className="me-2 fs-3">
                      <BsGripVertical className="me-2 fs-3" />
                    </div>
                    <div className="me-2 fs-3" style={{ color: "green" }}>
                      <TfiWrite />
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-1">
                        <b>{assignment.title}</b>
                      </p>
                      
                      <p className="mb-0">
                        <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                        <b>Not available until</b> May 6 at 12:00am | Due May 13 at
                        11:59pm | 100 pts
                      </p>
                    </div>
                  </a>

                  <AssignmentControlButtons
                        assignmentId={assignment._id}
                        deleteAssignment={(assignmentId) => {
                          dispatch(deleteAssignment(assignmentId));
                        }}
                      />
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
