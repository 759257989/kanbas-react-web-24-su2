import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { Link, useLocation } from "react-router-dom";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignments = db.assignments;
  const location = useLocation();
  console.log(location)
  console.log(aid);
  
  // return (
  //   <div id="wd-assignments-editor" className="container">
  //     <div className="mb-3">
  //       <label htmlFor="wd-name" className="form-label">
  //         Assignment Name
  //       </label>
  //       <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
  //     </div>
  //     <div className="mb-3">
  //       <label htmlFor="wd-description" className="form-label">
  //         Description
  //       </label>
  //       <textarea id="wd-description" className="form-control">
  //         The assignment is available online. Submit a link to the landing page
  //         of your project.
  //       </textarea>
  //     </div>
  //     <div className="row mb-3">
  //       <div className="col-md-4">
  //         <label htmlFor="wd-points" className="form-label">
  //           Points
  //         </label>
  //       </div>
  //       <div className="col-md-8">
  //         <input id="wd-points" value={100} className="form-control" />
  //       </div>
  //     </div>
  //     <div className="row mb-3">
  //       <div className="col-md-4">
  //         <label htmlFor="wd-group" className="form-label">
  //           Assignment Group
  //         </label>
  //       </div>
  //       <div className="col-md-8">
  //         <select name="assignmentgroup" id="wd-group" className="form-control">
  //           <option value="A1">a1</option>
  //           <option value="A2">a2</option>
  //           <option value="A3">a3</option>
  //         </select>
  //       </div>
  //     </div>
  //     <div className="row mb-3">
  //       <div className="col-md-4">
  //         <label htmlFor="wd-display-grade-as" className="form-label">
  //           Display Grade as
  //         </label>
  //       </div>
  //       <div className="col-md-8">
  //         <select
  //           name="grade"
  //           id="wd-display-grade-as"
  //           className="form-control"
  //         >
  //           <option value="Percentage">Percentage</option>
  //           <option value="Letter">Letter</option>
  //         </select>
  //       </div>
  //     </div>

  //     <div className="bordered-div mb-3">
  //       <div className="row mb-3">
  //         <div className="col-md-4">
  //           <label htmlFor="wd-submission-type" className="form-label">
  //             Submission Type
  //           </label>
  //         </div>
  //         <div className="col-md-8">
  //           <select
  //             name="type"
  //             id="wd-submission-type"
  //             className="form-control"
  //           >
  //             <option value="Online">Online</option>
  //             <option value="Paper">Paper</option>
  //           </select>
  //         </div>
  //       </div>
  //       <div className="mb-3">
  //         <label htmlFor="wd-online-entry-options" className="form-label">
  //           <b>Online Entry Options</b>
  //         </label>
  //         <div id="wd-select-many-genre">
  //           <div className="form-check">
  //             <input
  //               type="checkbox"
  //               id="wd-text-entry"
  //               value="TEXTENTRY"
  //               defaultChecked
  //               className="form-check-input"
  //             />
  //             <label htmlFor="wd-text-entry" className="form-check-label">
  //               Text Entry
  //             </label>
  //           </div>
  //           <div className="form-check">
  //             <input
  //               type="checkbox"
  //               id="wd-website-url"
  //               value="WEBSITE"
  //               className="form-check-input"
  //             />
  //             <label htmlFor="wd-website-url" className="form-check-label">
  //               Website URL
  //             </label>
  //           </div>
  //           <div className="form-check">
  //             <input
  //               type="checkbox"
  //               id="wd-media-recordings"
  //               value="MEDIA"
  //               defaultChecked
  //               className="form-check-input"
  //             />
  //             <label htmlFor="wd-media-recordings" className="form-check-label">
  //               Media Recordings
  //             </label>
  //           </div>
  //           <div className="form-check">
  //             <input
  //               type="checkbox"
  //               id="wd-student-annotation"
  //               value="STUDENT"
  //               className="form-check-input"
  //             />
  //             <label
  //               htmlFor="wd-student-annotation"
  //               className="form-check-label"
  //             >
  //               Student Annotation
  //             </label>
  //           </div>
  //           <div className="form-check">
  //             <input
  //               type="checkbox"
  //               id="wd-file-upload"
  //               value="FILE"
  //               className="form-check-input"
  //             />
  //             <label htmlFor="wd-file-upload" className="form-check-label">
  //               File Uploads
  //             </label>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="bordered-div">
  //       <div className="row mb-3">
  //         <div className="col-md-4">
  //           <label htmlFor="wd-assign-to" className="form-label">
  //             Assign to
  //           </label>
  //         </div>
  //         <div className="col-md-8">
  //           <input
  //             id="wd-assign-to"
  //             type="text"
  //             title="assign"
  //             placeholder="Everyone"
  //             className="form-control"
  //           />
  //         </div>
  //       </div>
  //       <div className="row mb-3">
  //         <div className="col-md-4">
  //           <label htmlFor="wd-due-date" className="form-label">
  //             Due
  //           </label>
  //         </div>
  //         <div className="col-md-8">
  //           <input
  //             type="date"
  //             id="wd-due-date"
  //             value="2011-11-22"
  //             className="form-control"
  //           />
  //         </div>
  //       </div>
  //       <div className="row mb-3">
  //         <div className="col-md-4">
  //           <label htmlFor="wd-available-from" className="form-label">
  //             Available from
  //           </label>
  //         </div>
  //         <div className="col-md-8">
  //           <input
  //             type="date"
  //             id="wd-available-from"
  //             value="2011-11-22"
  //             className="form-control"
  //           />
  //         </div>
  //       </div>
  //       <div className="row mb-3">
  //         <div className="col-md-4">
  //           <label htmlFor="wd-available-until" className="form-label">
  //             Until
  //           </label>
  //         </div>
  //         <div className="col-md-8">
  //           <input
  //             type="date"
  //             id="wd-available-until"
  //             value="2011-11-22"
  //             className="form-control"
  //           />
  //         </div>
  //       </div>
  //     </div>

  //     <div className="row">
  //       <div className="col">
          
  //         <button type="button" className="btn btn-danger float-end">
  //           save
  //         </button>

  //         <button type="button" className="btn btn-light me-2 float-end">
  //           cancel
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
// }

// return (
//   <div id="wd-assignments-editor" className="container">
//     {assignments
//       .filter((assignment) => assignment._id === aid)
//       .map((assignment) => (
//         <div key={assignment._id}>
//           <div className="mb-3">
//             <label htmlFor="wd-name" className="form-label">
//               Assignment Name
//             </label>
//             <input
//               id="wd-name"
//               value={assignment.title}
//               className="form-control"
              
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="wd-description" className="form-label">
//               Description
//             </label>
//             <textarea id="wd-description" className="form-control">
//               The assignment is available online. Submit a link to the landing page of your project.
//             </textarea>
//           </div>
//           <div className="row mb-3">
//             <div className="col-md-4">
//               <label htmlFor="wd-points" className="form-label">
//                 Points
//               </label>
//             </div>
//             <div className="col-md-8">
//               <input id="wd-points" value={100} className="form-control"  />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col-md-4">
//               <label htmlFor="wd-group" className="form-label">
//                 Assignment Group
//               </label>
//             </div>
//             <div className="col-md-8">
//               <select name="assignmentgroup" id="wd-group" className="form-control" disabled>
//                 <option value="A1">a1</option>
//                 <option value="A2">a2</option>
//                 <option value="A3">a3</option>
//               </select>
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col-md-4">
//               <label htmlFor="wd-display-grade-as" className="form-label">
//                 Display Grade as
//               </label>
//             </div>
//             <div className="col-md-8">
//               <select name="grade" id="wd-display-grade-as" className="form-control" disabled>
//                 <option value="Percentage">Percentage</option>
//                 <option value="Letter">Letter</option>
//               </select>
//             </div>
//           </div>

//           <div className="bordered-div mb-3">
//             <div className="row mb-3">
//               <div className="col-md-4">
//                 <label htmlFor="wd-submission-type" className="form-label">
//                   Submission Type
//                 </label>
//               </div>
//               <div className="col-md-8">
//                 <select name="type" id="wd-submission-type" className="form-control" disabled>
//                   <option value="Online">Online</option>
//                   <option value="Paper">Paper</option>
//                 </select>
//               </div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="wd-online-entry-options" className="form-label">
//                 <b>Online Entry Options</b>
//               </label>
//               <div id="wd-select-many-genre">
//                 <div className="form-check">
//                   <input
//                     type="checkbox"
//                     id="wd-text-entry"
//                     value="TEXTENTRY"
//                     defaultChecked
//                     className="form-check-input"
//                     disabled
//                   />
//                   <label htmlFor="wd-text-entry" className="form-check-label">
//                     Text Entry
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     type="checkbox"
//                     id="wd-website-url"
//                     value="WEBSITE"
//                     className="form-check-input"
//                     disabled
//                   />
//                   <label htmlFor="wd-website-url" className="form-check-label">
//                     Website URL
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     type="checkbox"
//                     id="wd-media-recordings"
//                     value="MEDIA"
//                     defaultChecked
//                     className="form-check-input"
//                     disabled
//                   />
//                   <label htmlFor="wd-media-recordings" className="form-check-label">
//                     Media Recordings
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     type="checkbox"
//                     id="wd-student-annotation"
//                     value="STUDENT"
//                     className="form-check-input"
//                     disabled
//                   />
//                   <label htmlFor="wd-student-annotation" className="form-check-label">
//                     Student Annotation
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     type="checkbox"
//                     id="wd-file-upload"
//                     value="FILE"
//                     className="form-check-input"
//                     disabled
//                   />
//                   <label htmlFor="wd-file-upload" className="form-check-label">
//                     File Uploads
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bordered-div">
//             <div className="row mb-3">
//               <div className="col-md-4">
//                 <label htmlFor="wd-assign-to" className="form-label">
//                   Assign to
//                 </label>
//               </div>
//               <div className="col-md-8">
//                 <input
//                   id="wd-assign-to"
//                   type="text"
//                   title="assign"
//                   placeholder="Everyone"
//                   className="form-control"
                  
//                 />
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col-md-4">
//                 <label htmlFor="wd-due-date" className="form-label">
//                   Due
//                 </label>
//               </div>
//               <div className="col-md-8">
//                 <input
//                   type="date"
//                   id="wd-due-date"
//                   value="2011-11-22"
//                   className="form-control"
                  
//                 />
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col-md-4">
//                 <label htmlFor="wd-available-from" className="form-label">
//                   Available from
//                 </label>
//               </div>
//               <div className="col-md-8">
//                 <input
//                   type="date"
//                   id="wd-available-from"
//                   value="2011-11-22"
//                   className="form-control"
                  
//                 />
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col-md-4">
//                 <label htmlFor="wd-available-until" className="form-label">
//                   Until
//                 </label>
//               </div>
//               <div className="col-md-8">
//                 <input
//                   type="date"
//                   id="wd-available-until"
//                   value="2011-11-22"
//                   className="form-control"
                 
//                 />
//               </div>
//             </div>
//           </div>
        
      
//       <div className="row">
//         <div className="col">
//         <Link to={`/assignments/${assignment.course}`} className="btn btn-danger float-end">
//               Save
//             </Link>
//             <Link to={`/assignments/${assignment.course}`} className="btn btn-light me-2 float-end">
//               Cancel
//             </Link>
//         </div>
//       </div>

    

    
//   </div>
//   ))}

//   <div/>
// );
// }


return (
  <div id="wd-assignments-editor" className="container">
    {assignments
      .filter((assignment) => assignment._id === aid)
      .map((assignment) => (
        <div key={assignment._id}>
          <div className="mb-3">
            <label htmlFor="wd-name" className="form-label">
              Assignment Name
            </label>
            <input
              id="wd-name"
              value={assignment.title}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-description" className="form-label">
              Description
            </label>
            <textarea id="wd-description" className="form-control">
              The assignment is available online. Submit a link to the landing page of your project.
            </textarea>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="wd-points" className="form-label">
                Points
              </label>
            </div>
            <div className="col-md-8">
              <input id="wd-points" value={100} className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="wd-group" className="form-label">
                Assignment Group
              </label>
            </div>
            <div className="col-md-8">
              <select name="assignmentgroup" id="wd-group" className="form-control" disabled>
                <option value="A1">a1</option>
                <option value="A2">a2</option>
                <option value="A3">a3</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="wd-display-grade-as" className="form-label">
                Display Grade as
              </label>
            </div>
            <div className="col-md-8">
              <select name="grade" id="wd-display-grade-as" className="form-control" disabled>
                <option value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
              </select>
            </div>
          </div>
          <div className="bordered-div mb-3">
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-submission-type" className="form-label">
                  Submission Type
                </label>
              </div>
              <div className="col-md-8">
                <select name="type" id="wd-submission-type" className="form-control" disabled>
                  <option value="Online">Online</option>
                  <option value="Paper">Paper</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="wd-online-entry-options" className="form-label">
                <b>Online Entry Options</b>
              </label>
              <div id="wd-select-many-genre">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="wd-text-entry"
                    value="TEXTENTRY"
                    defaultChecked
                    className="form-check-input"
                    disabled
                  />
                  <label htmlFor="wd-text-entry" className="form-check-label">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="wd-website-url"
                    value="WEBSITE"
                    className="form-check-input"
                    disabled
                  />
                  <label htmlFor="wd-website-url" className="form-check-label">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="wd-media-recordings"
                    value="MEDIA"
                    defaultChecked
                    className="form-check-input"
                    disabled
                  />
                  <label htmlFor="wd-media-recordings" className="form-check-label">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="wd-student-annotation"
                    value="STUDENT"
                    className="form-check-input"
                    disabled
                  />
                  <label htmlFor="wd-student-annotation" className="form-check-label">
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="wd-file-upload"
                    value="FILE"
                    className="form-check-input"
                    disabled
                  />
                  <label htmlFor="wd-file-upload" className="form-check-label">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bordered-div">
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-assign-to" className="form-label">
                  Assign to
                </label>
              </div>
              <div className="col-md-8">
                <input
                  id="wd-assign-to"
                  type="text"
                  title="assign"
                  placeholder="Everyone"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-due-date" className="form-label">
                  Due
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="date"
                  id="wd-due-date"
                  value="2011-11-22"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-available-from" className="form-label">
                  Available from
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="date"
                  id="wd-available-from"
                  value="2011-11-22"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-available-until" className="form-label">
                  Until
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="date"
                  id="wd-available-until"
                  value="2011-11-22"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={`/Kanbas/Courses/${assignment.course}/assignments`} className="btn btn-danger float-end">
                Save
              </Link>
              <Link to={`/Kanbas/Courses/${assignment.course}/assignments`} className="btn btn-light me-2 float-end">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      ))}
  </div>
);
}
