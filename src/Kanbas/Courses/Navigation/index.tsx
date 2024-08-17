
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();

  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home`, id: "wd-course-home-link" },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules`, id: "wd-course-modules-link" },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza`, id: "wd-course-piazza-link" },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom`, id: "wd-course-zoom-link" },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments`, id: "wd-course-assignments-link" },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes`, id: "wd-course-quizzes-link" },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades`, id: "wd-course-grades-link" },
    { label: "People", path: `/Kanbas/Courses/${cid}/People`, id: "wd-course-people-link" },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          id={link.id}
          className={`list-group-item text-center bg-white border-0
            ${pathname.includes(link.label)
              ? "text-black active border-start border-start-1 border-black"
              : "text-danger"
            }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
