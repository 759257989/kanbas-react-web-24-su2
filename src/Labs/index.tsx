import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Yu Wang</h1>
      <h1>Labs</h1>
      <a href="https://github.com/759257989/kanbas-react-web-24-su2.git" id="wd-github">My Github Page</a>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />

      </Routes>
    </div>
  );
}
