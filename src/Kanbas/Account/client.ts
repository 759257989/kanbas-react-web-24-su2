import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;


export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

// update the enrolled classes field for student users
export const StudentEnrollCourse = async (studentId: string, enrolledClasses: any) =>{
  console.log("the student enroll course in account client:  ", studentId, enrolledClasses)
  const response = await axiosWithCredentials.put(`${USERS_API}/${studentId}/studentEnroll`, enrolledClasses)
  return response.data;
}


//need to write routes function for StudentEnrollCourse that can upate the enrolled course
// in user routes.js
// then 
// write a function to fetch all the courses enrolled by the student in dashboard index.tsx