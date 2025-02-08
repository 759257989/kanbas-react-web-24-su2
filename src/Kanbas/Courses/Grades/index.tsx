import { IoIosSearch } from "react-icons/io";
import { FaFileImport } from "react-icons/fa6";
import { LiaFilterSolid } from "react-icons/lia";
import { FaGear } from "react-icons/fa6";
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import * as db from "../../Database";
import { useParams } from "react-router-dom";
export default function Grades() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const users = db.users;
  const grades = db.grades;
  const enrollment = db.enrollments

  const students_user_id = enrollment.filter((id: any) => id.course === cid)

  const studentInCourse = students_user_id.map(enrollUser => {
    return users.find(user => user._id === enrollUser.user);
  });



  // console.log(cid)
  // console.log(students_user_id)
  // console.log(studentInCourse)
//   return (
//     <div id="wd-grades" className="container-fluid">
//       <div className="row mb-3">
//         <div className="col">
//           <button type="button" className="btn btn-light float-end">
//             <FaGear />
//           </button>
//           <button
//             type="button"
//             className="btn btn-light me-2 float-end dropdown-toggle"
//             data-bs-toggle="dropdown"
//           >
//             <HiOutlineArrowLeftStartOnRectangle />
//             Export
//           </button>

//           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//             <li>
//               <a className="dropdown-item" href="#">
//                 Option 1
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Option 2
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Option 3
//               </a>
//             </li>
//           </ul>

//           <button type="button" className="btn btn-light float-end me-2">
//             <FaFileImport />
//             Import
//           </button>
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-5 col-sm-12">
//           <label htmlFor="wd-student" className="form-label">
//             <b>Student Names</b>
//           </label>
//           <select name="studentname" id="wd-student" className="form-control">
//             <option selected>Search Students</option>
//             <option value="A1">a1</option>
//             <option value="A2">a2</option>
//             <option value="A3">a3</option>
//           </select>
//         </div>
//         <div className="col-md-1 d-none d-md-block">
//           {/* This column is for the margin between the two components on larger screens */}
//         </div>
//         <div className="col-md-5 col-sm-12">
//           <label htmlFor="wd-assignment" className="form-label">
//             <b>Assignment Names</b>
//           </label>
//           <select
//             name="assignmentname"
//             id="wd-assignment"
//             className="form-control"
//           >
//             <option selected>Search Assignments</option>
//             <option value="A1">a1</option>
//             <option value="A2">a2</option>
//             <option value="A3">a3</option>
//           </select>
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col">
//           <button className="btn btn-light mb-3">
//             <LiaFilterSolid />
//             Apply Filters
//           </button>
//         </div>

//         <div id="wd-css-styling-tables" className="table-responsive">
//           <table className="table table-striped table-bordered table-responsive">
//             <thead>
//               <tr>
//                 <th>Student Name</th>
//                 <th>A1 SETUP Out of 100</th>
//                 <th>A2 HTML Out of 100</th>
//                 <th>A3 CSS Out of 100</th>
//                 <th>A4 BOOTSTRAP Out of 100</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td style={{ color: "red" }}>Jane Adams</td>
//                 <td>
//                   <input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   />
//                 </td>
//                 <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//                 <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//                   <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//               </tr>
//               <tr>
//                 <td style={{ color: "red" }}>Han Bao</td>
//                 <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//                 <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//                 <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//                   <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//               </tr>
//               <tr>
//                 <td style={{ color: "red" }}>Christina Allen</td>
//                 <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//                 <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//                 <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//                   <td><input
//                     type="number"
//                     id="a1"
//                     className="form-control"
//                     value="100"
//                   /></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


// return (
//   <div id="wd-grades" className="container-fluid">
//     <div className="row mb-3">
//       <div className="col">
//         <button type="button" className="btn btn-light float-end">
//           <FaGear />
//         </button>
//         <button
//           type="button"
//           className="btn btn-light me-2 float-end dropdown-toggle"
//           data-bs-toggle="dropdown"
//         >
//           <HiOutlineArrowLeftStartOnRectangle />
//           Export
//         </button>

//         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//           <li>
//             <a className="dropdown-item" href="#">
//               Option 1
//             </a>
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">
//               Option 2
//             </a>
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">
//               Option 3
//             </a>
//           </li>
//         </ul>

//         <button type="button" className="btn btn-light float-end me-2">
//           <FaFileImport />
//           Import
//         </button>
//       </div>
//     </div>

//     <div className="row mb-3">
//       <div className="col-md-5 col-sm-12">
//         <label htmlFor="wd-student" className="form-label">
//           <b>Student Names</b>
//         </label>
//         <select name="studentname" id="wd-student" className="form-control">
//           <option selected>Search Students</option>
//           <option value="A1">a1</option>
//           <option value="A2">a2</option>
//           <option value="A3">a3</option>
//         </select>
//       </div>
//       <div className="col-md-1 d-none d-md-block">
//         {/* This column is for the margin between the two components on larger screens */}
//       </div>
//       <div className="col-md-5 col-sm-12">
//         <label htmlFor="wd-assignment" className="form-label">
//           <b>Assignment Names</b>
//         </label>
//         <select
//           name="assignmentname"
//           id="wd-assignment"
//           className="form-control"
//         >
//           <option selected>Search Assignments</option>
//           <option value="A1">a1</option>
//           <option value="A2">a2</option>
//           <option value="A3">a3</option>
//         </select>
//       </div>
//     </div>

//     <div className="row mb-3">
//       <div className="col">
//         <button className="btn btn-light mb-3">
//           <LiaFilterSolid />
//           Apply Filters
//         </button>
//       </div>

//       <div id="wd-css-styling-tables" className="table-responsive">
//         <table className="table table-striped table-bordered table-responsive">
//           <thead>
//             <tr>
//               <th>Student Name</th>
//               {assignments.map((assignment: any) =>(
//                 <th>{assignment.title}</th>
//               ))}
              
//             </tr>
//           </thead>
//           <tbody>
            
//               {studentInCourse.map((student) => (
//                 <tr>
//                 <td style={{ color: "red" }}>{student?.firstName} {student?.lastName}</td>

//                 <td>
//                   {grades.map}
//                 <input
//                   type="number"
//                   id="a1"
//                   className="form-control"
//                   value="100"
//                 />
//               </td>
//                 </tr>
//               ))}
              
             
              
            
            
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// );
// }




return (
  <div id="wd-grades" className="container-fluid">
    <div className="row mb-3">
      <div className="col">
        <button type="button" className="btn btn-light float-end">
          <FaGear />
        </button>
        <button
          type="button"
          className="btn btn-light me-2 float-end dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <HiOutlineArrowLeftStartOnRectangle />
          Export
        </button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#">
              Option 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 3
            </a>
          </li>
        </ul>

        <button type="button" className="btn btn-light float-end me-2">
          <FaFileImport />
          Import
        </button>
      </div>
    </div>

    <div className="row mb-3">
      <div className="col-md-5 col-sm-12">
        <label htmlFor="wd-student" className="form-label">
          <b>Student Names</b>
        </label>
        <select name="studentname" id="wd-student" className="form-control">
          <option selected>Search Students</option>
          {studentInCourse.map((student:any) => (
            <option key={student._id} value={student._id}>
              {student.firstName} {student.lastName}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-1 d-none d-md-block"></div>
      <div className="col-md-5 col-sm-12">
        <label htmlFor="wd-assignment" className="form-label">
          <b>Assignment Names</b>
        </label>
        <select name="assignmentname" id="wd-assignment" className="form-control">
          <option selected>Search Assignments</option>
          {assignments.map((assignment) => (
            <option key={assignment._id} value={assignment._id}>
              {assignment.title}
            </option>
          ))}
        </select>
      </div>
    </div>

    <div className="row mb-3">
      <div className="col">
        <button className="btn btn-light mb-3">
          <LiaFilterSolid />
          Apply Filters
        </button>
      </div>

      <div id="wd-css-styling-tables" className="table-responsive">
        <table className="table table-striped table-bordered table-responsive">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {studentInCourse.map((student:any) => (
              <tr key={student._id}>
                <td style={{ color: "red" }}>{student.firstName} {student.lastName}</td>
                {assignments.map((assignment) => {
                  const grade = grades.find((grade) => grade.student === student._id && grade.assignment === assignment._id);
                  // console.log(grade)
                  return (
                    <td key={assignment._id}>
                      <input
                        type="number"
                        className="form-control"
                        value={grade ? grade.grade : ""}
                        
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};