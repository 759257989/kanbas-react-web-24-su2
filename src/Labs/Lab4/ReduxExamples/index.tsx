import React from "react";
import HelloRedux from "./HelloRedux";


import TodoList from "./todos/TodoList";
import CounterRedux from "../ReduxExamples/CounterRedux";
import AddRedux from "./AddRedux";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
     {/* <CounterRedux/> */}
     {/* <AddRedux/> */}
      <TodoList />
    </div>
  );
};
