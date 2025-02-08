import React, { useEffect, useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment} from "./reducer";
import * as client from "./client";
export default function AssignmentEditor() {
  const { aid } = useParams();
  // const assignments = db.assignments;
  const location = useLocation();
  console.log(location)
  console.log(aid);
  
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const assignment = assignments.find((assignment: any) => assignment._id === aid);

  const dispatch = useDispatch();

  const saveAssignment = async (assignment: any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    points: 0,
    dueDate: '',
    availableFrom: '',
    availableUntil: '',
  });


useEffect(() => {
  if (assignment) {
    setFormData({
      title: assignment.title,
      description: assignment.description,
      points: assignment.points,
      dueDate: assignment.dueDate,
      availableFrom: assignment.availableFrom,
      availableUntil: assignment.availableUntil,
    });
  }
}, [assignment]);

const handleChange = (e:any) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };
const handleSave = () => {
  dispatch(updateAssignment({ ...assignment, ...formData }));
  navigate(`/Kanbas/Courses/${assignment.course}/assignments`);
};

const handleCancel = () => {
  navigate(`/Kanbas/Courses/${assignment.course}/assignments`);
};

if (!assignment) {
  return <div>Assignment not found</div>;
}



return (
  <div id="wd-assignments-editor" className="container">
    <div key={assignment._id}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Assignment Name
        </label>
        <input
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="points" className="form-label">
            Points
          </label>
        </div>
        <div className="col-md-8">
          <input
            id="points"
            value={formData.points}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
        </div>
        <div className="col-md-8">
          <input
            type="date"
            id="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="availableFrom" className="form-label">
            Available From
          </label>
        </div>
        <div className="col-md-8">
          <input
            type="date"
            id="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="availableUntil" className="form-label">
            Available Until
          </label>
        </div>
        <div className="col-md-8">
          <input
            type="date"
            id="availableUntil"
            value={formData.availableUntil}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={handleSave} className="btn btn-danger float-end">
            Save
          </button>
          <button onClick={handleCancel} className="btn btn-light me-2 float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
);
}