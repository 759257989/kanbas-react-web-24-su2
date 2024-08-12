import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import * as db from "../Database";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import ProtectedRouteStudent from "./ProtectedRouteStudent";
import * as client from "../Account/client";
import * as clientCourse from "../Courses/client"
// use the Account client to update the student enrolled courses
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  // the current user logged in
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // store the classes that STUDENT user selected to enroll
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  // the student enrolled classes
  const [enrolledCourses, setEnrolledCourses] = useState<any | null>(
    currentUser.enrolledCourses
  );

  // used for fetch the courses enrolled by students
  const [studentCourses, setStudentCourses] = useState<any[]>([]);

  const fetchStudentCourses = async ()=> {
    const courseNumbers = currentUser.enrolledCourses

    const fetchedenrolledCourses = await clientCourse.fetchCoursesByNumber(courseNumbers)
    console.log("the enrolledcourses from fetch in dashborad index:", fetchedenrolledCourses )
    
    // Flatten the array if it's nested
    const flattenedCourses = fetchedenrolledCourses.flat();

    setStudentCourses(flattenedCourses);

    console.log("the enrolledcourses from studentCoursesState dashborad index:", studentCourses )
  }


  //update when the student enrooled courses get changed
  useEffect(() =>{
    if (currentUser.role === "STUDENT") {
      fetchStudentCourses();
    }
  },[enrolledCourses]);

 

  // Functions to handle student enrolling in the selected course

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNumber = e.target.value;
    const course = courses.find((course) => course.number === selectedNumber);
    setSelectedCourse(course.number || null);
    // console.log("Selected course info:", course);
  };

  const handleEnroll = async () => {
    if (selectedCourse && !enrolledCourses.includes(selectedCourse)) {
      // const updatedEnrolledCourses = [...enrolledCourses, selectedCourse];

      const updatedEnrolledCourses = [selectedCourse];
      setEnrolledCourses(updatedEnrolledCourses);
      // call account client to update the student user enrolled courses info
      await client.StudentEnrollCourse(currentUser._id, updatedEnrolledCourses);
      // await client.StudentEnrollCourse(currentUser._id, selectedCourse);
    } else if (enrolledCourses.includes(selectedCourse)) {
      alert("You are already enrolled in this course.");
    } else {
      alert("Please select a course to enroll.");
    }
  };


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <ProtectedRoute>
        {/* student account can't add/create, update courses */}
        <h5>
          <b>Create Course And Update Course</b>
          <br />
          <br />
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            {" "}
            Add{" "}
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>

        <br />
        <label>Course Name</label>
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <label>Course Description</label>
        <textarea
          value={course.description}
          className="form-control mb-2"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <label>Course Number</label>
        <input
          value={course.number}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
      </ProtectedRoute>
      <hr />
      {/* for student account enrolling to new courses */}
      {/* //////////////////////////////////////////////////////////////////////////////// */}
      {/* student-enroll-courses functionality only available to students*/}
      <ProtectedRouteStudent>
        <h2>Available Courses to Enroll</h2>

        <div className="student-enroll-courses">
          <select
            value={selectedCourse ? selectedCourse.id : ""}
            onChange={handleCourseChange}
            className="course-select"
          >
            <option value="" disabled>
              Select a course
            </option>

            {courses.map((course) => (
              <option key={course.id} value={course.number}>
                {course.name}
              </option>
            ))}
          </select>
          <button onClick={handleEnroll} className="enroll-button">
            Enroll
          </button>
        </div>

        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {studentCourses.map((course) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="text-decoration-none"
                >
                  <div className="card rounded-3 overflow-hidden">
                    <img src="/images/reactjs.jpg" height="{160}" />
                    <div className="card-body">
                      <span
                        className="wd-dashboard-course-link"
                        style={{
                          textDecoration: "none",
                          color: "navy",
                          fontWeight: "bold",
                        }}
                      >
                        {course.name}
                      </span>
                      <p
                        className="wd-dashboard-course-title card-text"
                        style={{ maxHeight: 53, overflow: "hidden" }}
                      >
                        {course.description}
                      </p>
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="btn btn-primary"
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </ProtectedRouteStudent>
      {/* //////////////////////////////////////////////////////////////////////// */}
      <ProtectedRoute>
        {/* this is only visible to faculty users */}
        <h2 id="wd-dashboard-published">
          <b>Created Courses</b> ({courses.length})
        </h2>{" "}
        <br />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {courses.map((course) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="text-decoration-none"
                >
                  <div className="card rounded-3 overflow-hidden">
                    <img src="/images/reactjs.jpg" height="{160}" />
                    <div className="card-body">
                      <span
                        className="wd-dashboard-course-link"
                        style={{
                          textDecoration: "none",
                          color: "navy",
                          fontWeight: "bold",
                        }}
                      >
                        {course.name}
                      </span>
                      <p
                        className="wd-dashboard-course-title card-text"
                        style={{ maxHeight: 53, overflow: "hidden" }}
                      >
                        {course.description}
                      </p>
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="btn btn-primary"
                      >
                        Go
                      </Link>

                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>

                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </ProtectedRoute>
    </div>
  );
}
