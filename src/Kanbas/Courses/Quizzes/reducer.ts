import { createSlice } from "@reduxjs/toolkit";
// import { quizzes } from "../../Database";
const initialState = {
  quizzes:[],
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },

    addQuiz: (state, { payload: quiz }) => {
        // console.log("the payload in addQuiz, reducer quizzes: ",quiz)
      const newQuiz: any = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: quiz.name,
        // course: quiz.course,
        // description: quiz.description,
        // points: quiz.points,
        // due: quiz.due,
        // from: quiz.from,
        // until: quiz.until,

      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (q: any) => q._id !== quizId);
    },
    updateModule: (state, { payload: module }) => {
      state.quizzes = state.quizzes.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editModule: (state, { payload: moduleId }) => {
      state.quizzes = state.quizzes.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },

    updatePublishedStatusRedux: (state, { payload: quizId }) => {
        state.quizzes = state.quizzes.map((q: any) =>
          q._id === quizId ? { ...q, editing: true } : q
        ) as any;
      },
  },
});
export const { addQuiz, deleteQuiz, updateModule, editModule, setQuizzes, updatePublishedStatusRedux } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;