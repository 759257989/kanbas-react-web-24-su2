import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

import NewAssignmentEditor from "./NewAssignmentEditor";

export default function AssignmentControls({
  assignmentName,
  setAssignmentName,
  addAssignment,
}: {
  assignmentName: string;
  setAssignmentName: (title: string) => void;
  addAssignment: () => void;
}) {
  return (
    <div>
      <input
        id="wd-search-assignment"
        placeholder="Search for Assignments"
        className=""
      />

      <button
        id="wd-add-assignment"
        className="btn btn-lg btn-danger me-1 float-end"
        data-bs-toggle="modal"
        data-bs-target="#wd-add-assignment-dialog"
      >
        + Assignment
      </button>

      <button
        id="wd-add-assignment-group"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        + Group
      </button>
      <br />
      <br />
      <br />
      <br />
      {/* <h3 id="wd-assignments-title">
    ASSIGNMENTS 40% of Total <button>+</button>
  </h3> */}

      <NewAssignmentEditor
        dialogTitle="Add Assignment"
        assignmentName={assignmentName}
        setAssignmentName={setAssignmentName}
        addAssignment={addAssignment}
      />
    </div>
  );
}

{
  /* <NewAssignmentEditor dialogTitle="Add Assignment" assignmentName={assignmentName}
                    setAssignmentName={setAssignmentName} addAssignment={addAssignment} /> */
}
