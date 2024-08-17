import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

// taking the quiz client functions
export const findQuizAttempsInfoByQIdAndUId = async(qid:any, uid:any) => {
  const response = await axios.get(`${QUIZZES_API}/${qid}/${uid}/attemptsTook`)
  return response;
}

//update user quiz attempt data 
export const saveUserScore = async(qid:any, uid:any,attempt:any) =>{
  const response = await axios.put(`${QUIZZES_API}/${qid}/${uid}/saveAttempt`, attempt)
}


// get user quiz score
export const getQuizScore = async(qid:any, uid:any) =>{
  const response = await axios.get(`${QUIZZES_API}/${qid}/${uid}/score`)
  return response.data
}
/////////////////////////////////////


export const updateQuiz = async (qid: any, quiz: any) => {
  const response = await axios.put(`${QUIZZES_API}/${qid}`, quiz);
  // return response.data;
};

export const updateQuizWithDataReturned = async (qid: any, quiz: any) => {
  const response = await axios.put(`${QUIZZES_API}/${qid}`, quiz);
  return response.data;
};

// export const deleteAssignment = async (assignmentId: string) => {
//   const response = await axios
//     .delete(`${COURSES_API}/${assignmentId}`);
//   return response.data;
// };

export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${courseId}/quizzes`);
  return response.data;
};

export const findQuizById = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}/findById`);
  console.log("API response findquid by id for quiz client.ts:", response.data); // Add this log
  return response.data;
};

export const createQuiz = async (courseId: string, quiz: any) => {
  // console.log("creating quiz in quiz client.ts: ", quiz)
  const response = await axios.post(`${QUIZZES_API}/${courseId}/quiz`, quiz);
  return response.data;
};

export const deleteQuiz = async (quizId: string) => {
  // console.log("deleting quiz in quiz client.ts: ", quiz)
  const response = await axios.delete(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

export const updatePublishedStatus = async (quizId: string) => {
  try {
    // Fetch the current quiz data
    const response = await axios.get(`${QUIZZES_API}/${quizId}/findById`);
    console.log(
      "the response get from fetch in updatePublishedstats in quiz client.ts: ",
      response
    );
    const quiz = response.data;
    console.log("the updatestats quiz in quiz client: ", quiz);

    // Toggle the publishedStatus
    const updatedStatus = !quiz.publishedStatus;

    // Update the quiz with the new status
    const updateResponse = await axios.patch(`${QUIZZES_API}/${quizId}`, {
      publishedStatus: updatedStatus,
    });

    // Return the updated quiz data
    return updateResponse.data;
  } catch (error) {
    console.error("Error updating published status:", error);
    throw error; // Rethrow the error after logging it
  }
};

// for submitting student quiz attemps
export const quizSubmission = async (
  courseId: string,
  quizId: string,
  answers: any,
  studentId: string
) => {
  try {
    const response = await axios.post(
      `${QUIZZES_API}/${courseId}/quizzes/${quizId}/submit`,
      {
        studentId, // Include studentId if required by your API
        answers,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting quiz:", error);
    throw error; // Rethrow the error after logging it
  }
};
