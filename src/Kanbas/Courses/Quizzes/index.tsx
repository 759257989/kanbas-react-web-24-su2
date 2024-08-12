import { IoEllipsisVertical } from "react-icons/io5";
import * as client from "./client";
import { BsGripVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import QuizzesControls from "./QuizzesControls";
import ProtectedRoute from "./ProtectedRoute";

export default function Quizzes() {
  const { cid } = useParams();
  const [quizName, setQuizName] = useState("");
  const createQuiz = async (module: any) => {
    // const newModule = await client.createModule(cid as string, module);
    // dispatch(addModule(newModule));
  };

  //client 从mongodb中查找所用的course 有id == cid的，然后保存下来
  const [theCurrentCourse, setCurrentCourse] = useState<any>(null);
  const currentCourse = async (cid: any) => {
    // const result = await client.findCourseById(cid)
    // console.log("the result get from find course by id in index model: ", result)
    // setCurrentCourse(result)
  };

  useEffect(() => {
    currentCourse(cid);
  }, [cid]);

  // useEffect(() => {
  //     if (theCurrentCourse) {
  //       fetchModules();
  //     }
  //   }, [theCurrentCourse]); // Run this effect when theCurrentCourse changes

  return (
    <div id="wd-quizzes">
      <ProtectedRoute>
        {/* must be a faculty to be able to create new quiz */}
        <QuizzesControls
          quizName={quizName}
          setQuizName={setQuizName}
          addQuiz={() => {
            createQuiz({ name: quizName, course: theCurrentCourse.number });
            setQuizName("");
          }}
        />
      </ProtectedRoute>
      <br />
      <br />
      <br />
      <br />
      <br />
      <li className="wd-quiz list-group p-0 mb-5 fs-5 border-gray">
        {/* header of the quizzess table */}
        <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          Quizzes
          <span className="ms-auto me-2 border rounded p-1 bg-gray">
            20% of Total
          </span>
          <button className="btn">+</button>
          <IoEllipsisVertical className="fs-4" />
        </div>
      </li>

      <br />
      <br />
      <br />
      <br />

      {/* the list of quizzes  */}
      <ul id="wd-quizzes" className="list-group rounded-0"></ul>
    </div>
  );
}
