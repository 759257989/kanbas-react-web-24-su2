import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const updateAssignment = async (assignment: any) => {
    const response = await axios.
      put(`${COURSES_API}/${assignment._id}`, assignment);
    return response.data;
  };
  


export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios
    .delete(`${COURSES_API}/${assignmentId}`);
  return response.data;
};



export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios
      .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
  };
  
export const createAssignment = async (courseId: string, assignment: any) => {
const response = await axios.post( `${COURSES_API}/${courseId}/assignments`, assignment );
return response.data;
};
  
