
import CoursesNavigation from "./Navigation";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Assignments from "./Assignments";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import PeopleDetails from "./People/Details";
import { useEffect, useState } from "react";
import * as client from "./client";
import Quizzes from "./Quizzes";
import QuizDetailsScreen from "./Quizzes/QuizDetailsScreen";
import QuizEditor from "./Quizzes/QuizEditor";
import TakeQuizStudent from "./Quizzes/TakeQuizStudent";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
 
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}&gt; {pathname.split("/")[4]}
      </h2>

      {/* <h3>{course.number}</h3> */}
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            {/* <Route path="Modules" element={<Modules />} /> */}
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            
            <Route path="Grades" element={<Grades/>}/>
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleTable />} />
            <Route path="Quizzes" element={<Quizzes/>} />
            {/* <Route path="Kanbas/Courses/:cid/Quizzes/:qid" element={<QuizDetailsScreen />} /> */}
            <Route path="Quizzes/:qid" element={<QuizDetailsScreen />} />
            <Route path="Quizzes/:qid/Edit" element={<QuizEditor />} />
            <Route path="Quizzes/:qid/Start" element={<TakeQuizStudent />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}
