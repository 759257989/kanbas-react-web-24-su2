export default function NewAssignmentEditor({
  dialogTitle,
  assignmentName,
  setAssignmentName,
  addAssignment,
}: {
  dialogTitle: string;
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  addAssignment: () => void;
}) {
  return (
    <div
      id="wd-add-assignment-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {dialogTitle}{" "}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="wd-description" className="form-label">
              Assignment Name
            </label>
            <input
              className="form-control"
              value={assignmentName}
              placeholder="New Assignment"
              onChange={(e) => setAssignmentName(e.target.value)}
            />
          </div>

          <div className="modal-body">
            <label htmlFor="wd-description" className="form-label">
              Description
            </label>
            <textarea id="wd-description" className="form-control">
              New Assignment Description.
            </textarea>
          </div>

          <div className="modal-body ">
            <label htmlFor="wd-points" className="form-label">
              Points
            </label>
            <input id="wd-points" value={100} className="form-control" />
          </div>

          <div className="modal-body ">
            <label htmlFor="wd-due-date" className="form-label">
              Due
            </label>

            <input
              type="date"
              id="wd-due-date"
              value="2011-11-22"
              className="form-control"
            />
          </div>

          <div className="modal-body ">
            <label htmlFor="wd-available-from" className="form-label">
              Available from
            </label>

            <input
              type="date"
              id="wd-available-from"
              value="2011-11-22"
              className="form-control"
            />
          </div>

          <div className="modal-body ">
            <label htmlFor="wd-available-Until" className="form-label">
              Available Until
            </label>

            <input
              type="date"
              id="wd-available-Until"
              value="2011-11-29"
              className="form-control"
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel{" "}
            </button>
            <button
              onClick={addAssignment}
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
