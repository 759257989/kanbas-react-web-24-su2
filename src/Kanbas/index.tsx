
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import * as client from "./Courses/client";
import { useEffect, useState } from "react";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import QuizDetailsScreen from "./Courses/Quizzes/QuizDetailsScreen";

export default function Kanbas() {
  //keep track of the current user
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);

  // when creating a new course, the course creator contains information about the the creator/the current user
  
  
  // console.log("the current user in kanbas index is : ", currentUser)
  
  const [course, setCourse] = useState<any>({
    // _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    creator: null, // Initially set to null
  });

  
  // const fetchCourses = async () => {
  //   const courses = await client.fetchAllCourses();
  //   setCourses(courses);
  // };

  // useEffect(() => {
  //   fetchCourses();
  // }, []);


  //check the role of the current user, 
  // if is a faculty, load the courses created by faculty, 
  // if is a student, load the courses enrolled by student
  const fetchCourses = async () => {
    if (currentUser && currentUser.role) {
      let courses;
      if (currentUser.role === "FACULTY") {
        // Fetch courses created by the faculty member
        courses = await client.fetchCoursesCreatedByFaculty(currentUser._id);
      } else if (currentUser.role === "STUDENT") {
        // Fetch courses enrolled by the student
        console.log("current user info in kandas index.tsx: ", currentUser)
        // courses = await client.fetchCoursesEnrolledByStudent(currentUser._id, currentUser.enrolledCourses);
        courses = await client.fetchAllCourses();
      } else {
        // for other types of role
        courses = await client.fetchAllCourses();
      }
      setCourses(courses);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  

// Update the course state with the creator information once the currentUser is available
useEffect(() => {
  if (currentUser && currentUser._id) {
    setCourse((course:any) => ({
      ...course,
      creator: currentUser._id,
    }));
  }
}, [currentUser]);

  const addNewCourse = async () => {
    console.log("the coursecreated in kanbas index: ", course)
    const newCourse = await client.createCourse(course);
    
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async (courseId: any) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async() => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
 
  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="d-none d-md-block bg-black">
            <KanbasNavigation />
          </div>
          <div className="flex-fill p-4">
            <Routes>
            <Route path="/Account/*" element={<Account />} />
              <Route path="/" element={<Navigate to="Dashboard" />} />
              {/* <Route path="Account" element={<h1>Account</h1>} /> */}
              <Route
                path="Dashboard"
                element={
                  <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Courses/:cid/*"
                // when user is signed in
                element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute> }
              />            
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
