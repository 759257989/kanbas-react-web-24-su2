import CoursesNavigation from "./Navigation";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Assignments from "./Assignments";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa6";
export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234
      </h2>

      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:id" element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades/>}/>

            </Routes>
          </td>
        </tr>
      </table>
    </div>


//     <div id="wd-courses">
//   <h2 className="text-danger">
//       <FaAlignJustify className="me-4 fs-4 mb-1" />
//       Course 1234
//   </h2>
//   <hr />
//   <CoursesNavigation />
//   <div>
  
//     <Routes>
//       <Route path="Home" element={<Home />} />
//       <Route path="Modules" element={<Modules />} />
//       <Route path="Assignments" element={<Assignments />} />
//       <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//     </Routes>
//   </div>
   
// </div>

  );
}
