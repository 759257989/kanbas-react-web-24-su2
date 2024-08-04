


import "./index.css";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TfiWrite } from "react-icons/tfi";
import { IoEllipsisVertical } from "react-icons/io5";
import * as db from "../../Database";
import { useParams } from "react-router-dom";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { setAssignments,  addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import * as client from "./client";

import NewAssignmentEditor from "./NewAssignmentEditor";

export default function Assignments() {
  const { cid } = useParams();
  const [assignmentName, setAssignmentName] = useState("");
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);


 


  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment (assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };



  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
  };


  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);


  return (
    <div id="wd-assignments">
      <div>
        <AssignmentControls 
          setAssignmentName={setAssignmentName} 
          assignmentName={assignmentName} 
          addAssignment={() => {
            createAssignment({ title: assignmentName, course: cid });
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
                          removeAssignment(assignmentId);
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







/**
 * 


import "./index.css";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TfiWrite } from "react-icons/tfi";
import { IoEllipsisVertical } from "react-icons/io5";
import * as db from "../../Database";
import { useParams } from "react-router-dom";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { setAssignments,  addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
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

 */