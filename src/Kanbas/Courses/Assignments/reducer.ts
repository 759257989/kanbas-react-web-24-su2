// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
// const initialState = {
//   assignments: assignments,
// };
// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment: any = {
//         _id: new Date().getTime().toString(),
//         // lessons: [],
//         // name: assignment.name,
//         // course: Assignment.course,
//         title: assignment.title,
//         course: assignment.course,
//       };
//       state.assignments = [...state.assignments, newAssignment] as any;
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       // alert("Delete this?")
//       state.assignments = state.assignments.filter(
//         (m: any) => m._id !== assignmentId);
//     },
//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((m: any) =>
//         m._id === assignment._id ? assignment : m
//       ) as any;
//     },
//     editAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.map((m: any) =>
//         m._id === assignmentId ? { ...m, editing: true } : m
//       ) as any;
//     },
//   },
// });
// export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
//   assignmentsSlice.actions;
// export default assignmentsSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        // lessons: [],
        // name: assignment.name,
        // course: Assignment.course,
        title: assignment.title,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      // alert("Delete this?")
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments  } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;