import { IoEllipsisVertical } from "react-icons/io5";
import * as client from "./client";
import { BsGripVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import QuizzesControls from "./QuizzesControls";
import ProtectedRouteFaculty from "./ProtectedRouteFaculty";
import ProtectedRouteStudent from "./ProtectedRouteStudent";

import {
  setQuizzes,
  addQuiz,
  editModule,
  updateModule,
  deleteQuiz,
  updatePublishedStatusRedux,
} from "./reducer";
import * as clientCourse from "../client";
import { TfiWrite } from "react-icons/tfi";
import QuizControlButtons from "./QuizControlButtons";
import { Link } from "react-router-dom";

export default function Quizzes() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  // for creating quiz, information
  const [quizName, setQuizName] = useState("");
  const [quizDescription, setQuizDescription] = useState<string>("");
  const [quizDue, setQuizDue] = useState<Date | null>(null);
  const [quizAvailableDate, setQuizAvailableDate] = useState<Date | null>(null);
  const [quizPoints, setQuizPoints] = useState<number>(0);
  const [quizQuestionsNumber, setQuizQuestionsNumber] = useState<number>(0);

  //client 从mongodb中查找所用的course 有id == cid的，然后保存下来
  const [theCurrentCourse, setCurrentCourse] = useState<any>(null);

  const currentCourse = async (cid: any) => {
    const result = await clientCourse.findCourseById(cid);
    console.log(
      "the result get from find course by id in index Quizzes: ",
      result
    );
    setCurrentCourse(result);
  };

  useEffect(() => {
    currentCourse(cid);
  }, [cid]);

  useEffect(() => {
    if (theCurrentCourse) {
      fetchQuizzes();
    }
  }, [theCurrentCourse]); // Run this effect when theCurrentCourse changes

  // const createQuiz = async (quiz: any) => {
  //   const newQuiz = await client.createQuiz(cid as string, quiz);
  //   console.log("new quiz created in quiz index.tsx: ", newQuiz);

  //   // save to local reducer
  //   dispatch(addQuiz(newQuiz));
  // };

  const createQuiz = async (quiz: any) => {
    const newQuiz = await client.createQuiz(cid as string, {
      ...quiz,
      publishedStatus: quiz.publishedStatus ?? false, // Ensure default false if not provided
    });
    console.log("new quiz created in quiz index.tsx: ", newQuiz);

    // save to local reducer
    dispatch(addQuiz(newQuiz));
  };

  const fetchQuizzes = async () => {
    // console.log("the fetch current course number in index modules: ", theCurrentCourse.number)
    const quizzes = await client.findQuizzesForCourse(
      theCurrentCourse.number as string
    );
    console.log("the quizzes find in quiz index: ", quizzes);
    dispatch(setQuizzes(quizzes));
  };

  const removeQuiz = async (quizId: string) => {
    await client.deleteQuiz(quizId);
    dispatch(deleteQuiz(quizId));
  };

  const updatePublishedStatus = async (quizId: string) => {
    await client.updatePublishedStatus(quizId);
    dispatch(updatePublishedStatusRedux(quizId));
    fetchQuizzes(); //refresh the list
  };

  return (
    <div id="wd-quizzes">
      <ProtectedRouteFaculty>
        {/* must be a faculty to be able to create new quiz */}

        <QuizzesControls
          quizName={quizName}
          setQuizName={setQuizName}
          quizDescription={quizDescription}
          setQuizDescription={setQuizDescription}
          quizDue={quizDue}
          setQuizDue={setQuizDue}
          quizAvailableDate={quizAvailableDate}
          setQuizAvailableDate={setQuizAvailableDate}
          quizPoints={quizPoints}
          setQuizPoints={setQuizPoints}
          quizQuestionsNumber={quizQuestionsNumber}
          setQuizQuestionsNumber={setQuizQuestionsNumber}
          addQuiz={() => {
            createQuiz({
              name: quizName,
              course: theCurrentCourse.number,
              description: quizDescription,
              due: quizDue,
              availableDate: quizAvailableDate,
              points: quizPoints,
              questionsNumber: quizQuestionsNumber,
            });
            setQuizName("");
            setQuizDescription("");
            setQuizDue(null); // Since it's a Date or null
            setQuizAvailableDate(null); // Since it's a Date or null
            setQuizPoints(0); // Resetting to a number
            setQuizQuestionsNumber(0); // Resetting to a number
          }}
        />
      </ProtectedRouteFaculty>

      {/*       
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <ul id="wd-quizzes" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            Quizzes
            <span className="ms-auto me-2 border rounded p-1 bg-gray">
              20% of Total
            </span>
            <button className="btn">+</button>
            <IoEllipsisVertical className="fs-4" />
          </div>

          <ul id="wd-quiz-list" className="wd-lessons list-group rounded-0">
            <ProtectedRouteFaculty>
              {/* faculty version */}
              {quizzes.map((quiz: any) => {
                const currentDate = new Date();
                const availableDate = quiz.availableDate
                  ? new Date(quiz.availableDate)
                  : null;
                const dueDate = quiz.due ? new Date(quiz.due) : null;

                let availabilityStatus = "N/A";
                if (availableDate && dueDate) {
                  if (currentDate < availableDate) {
                    availabilityStatus = `Not available until: ${availableDate
                      .toISOString()
                      .slice(0, 10)}`;
                  } else if (
                    currentDate >= availableDate &&
                    currentDate <= dueDate
                  ) {
                    availabilityStatus = "Available";
                  } else if (currentDate > dueDate) {
                    availabilityStatus = "Closed";
                  }
                }

                return (
                  <li
                    key={quiz._id}
                    className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex align-items-center"
                  >
                    <Link
                      to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                      className="d-flex align-items-center w-100 text-decoration-none text-dark"
                    >
                      <div className="me-2 fs-3">
                        <BsGripVertical className="me-2 fs-3" />
                      </div>
                      <div className="me-2 fs-3" style={{ color: "green" }}>
                        <TfiWrite />
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-1">
                          <b>{quiz.name}</b>
                        </p>

                        <p className="mb-0">
                          <span style={{ color: "red" }}>
                            {quiz.publishedStatus ? "Published" : "Unpublished"}
                          </span>{" "}
                          | <b>Status: </b> {availabilityStatus} | <b>Due: </b>{" "}
                          {dueDate && !isNaN(dueDate.getTime())
                            ? dueDate.toISOString().slice(0, 10)
                            : "N/A"}{" "}
                          at 11:59pm | <b>Points: </b>
                          {quiz.points} pts | <b>Questions: </b>
                          {quiz.questionsNumber}
                        </p>
                      </div>
                    </Link>

                    <ProtectedRouteFaculty>
                      <QuizControlButtons
                        quizId={quiz._id}
                        deleteQuiz={removeQuiz}
                        updatePublishStatusButton={updatePublishedStatus}
                      />
                    </ProtectedRouteFaculty>
                  </li>
                );
              })}
            </ProtectedRouteFaculty>

            {/* student version 
            only published quizzes are available*/}

            <ProtectedRouteStudent>
              {quizzes
                .filter((quiz: any) => quiz.publishedStatus !== false)
                .map((quiz: any) => {
                  const currentDate = new Date();
                  const availableDate = quiz.availableDate
                    ? new Date(quiz.availableDate)
                    : null;
                  const dueDate = quiz.due ? new Date(quiz.due) : null;

                  let availabilityStatus = "N/A";
                  if (availableDate && dueDate) {
                    if (currentDate < availableDate) {
                      availabilityStatus = `Not available until: ${availableDate
                        .toISOString()
                        .slice(0, 10)}`;
                    } else if (
                      currentDate >= availableDate &&
                      currentDate <= dueDate
                    ) {
                      availabilityStatus = "Available";
                    } else if (currentDate > dueDate) {
                      availabilityStatus = "Closed";
                    }
                  }

                  return (
                    <li
                      key={quiz._id}
                      className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex align-items-center"
                    >
                      <Link
                        to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                        className="d-flex align-items-center w-100 text-decoration-none text-dark"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="me-2 fs-3">
                          <BsGripVertical className="me-2 fs-3" />
                        </div>
                        <div className="me-2 fs-3" style={{ color: "green" }}>
                          <TfiWrite />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-1">
                            <b>{quiz.name}</b>
                          </p>

                          <p className="mb-0">
                            <span style={{ color: "red" }}>
                              {quiz.publishedStatus
                                ? "Published"
                                : "Unpublished"}
                            </span>{" "}
                            | <b>Status: </b> {availabilityStatus} |{" "}
                            <b>Due: </b>{" "}
                            {dueDate && !isNaN(dueDate.getTime())
                              ? dueDate.toISOString().slice(0, 10)
                              : "N/A"}{" "}
                            at 11:59pm | <b>Points: </b>
                            {quiz.points} pts | <b>Questions: </b>
                            {quiz.questionsNumber}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
            </ProtectedRouteStudent>
          </ul>
        </li>
      </ul>
    </div>
  );
}
