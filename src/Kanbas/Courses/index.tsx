import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<h2><Home /></h2>} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<h2><Assignments /></h2>} />
              <Route path="Assignments/:id" element={<AssignmentEditor />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}
