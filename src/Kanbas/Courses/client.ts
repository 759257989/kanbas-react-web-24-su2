import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// project version: fetch courses for falculty that is associated with the faculty creator
// faculty fetch
export const fetchCoursesCreatedByFaculty = async (userId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${userId}/faculty`);
  // include the faculty userid in the url
  return data;
};

// student fetch
export const fetchCoursesEnrolledByStudent = async (userId: string, enrolledCourseNumbers:any) => {
  const { data } = await axios.get(`${COURSES_API}/${userId}/student`, enrolledCourseNumbers);
  // // include the student userid in the url
  return data;
};

// fetch course based on coursenumber
// export const fetchCoursesByNumber =  async (courseNumber: any) => {
//   console.log("the course numbers received in client courses: ", courseNumber)
//   courseNumber.array.forEach(c => {
//     const number = c.number
//     const { data } = await axios.get(`${COURSES_API}/${number}`);
//     const courses = []
//     courses.push(data)
//   });
  
//   return courses
// };

export const fetchCoursesByNumber = async (courseNumbers: any) => {
  // console.log("The course numbers received in client courses:", courseNumbers);

  const courses = [];
  
  for (const course of courseNumbers) {
    const number = course.number;
    const { data } = await axios.get(`${COURSES_API}/${number}/number`);
    courses.push(data);
  }

  // console.log("the courses fetched in student courses client: ", courses)
  return courses;
};

///////////////////////////////////////////////////////////////////////////////

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const createCourse = async (course: any) => {
  const response = await axios.post(COURSES_API, course);
  return response.data;
};

export const deleteCourse = async (id: string) => {
  const response = await axios.delete(`${COURSES_API}/${id}`);
  return response.data;
};

export const updateCourse = async (course: any) => {
  const response = await axios.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};
