export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <br></br>

        <img src="/images/MathA.jpg" width={200} />
        <div className="wd-dashboard-course">
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/1234/Home"
          >
            MathA
          </a>
          <p className="wd-dashboard-course-title">
            math A class
          </p>
          <a href="#/Kanbas/Courses/1234/Home"> Go </a>
        </div>
        <br></br>
        <img src="/images/MathB.jpg" width={200} />
        <div className="wd-dashboard-course">
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/1234/Home"
          >
            MathB
          </a>
          <p className="wd-dashboard-course-title">
          math B class
          </p>
          <a href="#/Kanbas/Courses/1234/Home"> Go </a>
        </div>
        <br></br>

        <img src="/images/history.jpg" width={200} />
        <div className="wd-dashboard-course">
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/1234/Home"
          >
            History
          </a>
          <p className="wd-dashboard-course-title">
            History class
          </p>
          <a href="#/Kanbas/Courses/1234/Home"> Go </a>
        </div>
        <br></br>

        <img src="/images/art.jpg" width={200} />
        <div className="wd-dashboard-course">
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/1234/Home"
          >
            Art
          </a>
          <p className="wd-dashboard-course-title">
            Art class
          </p>
          <a href="#/Kanbas/Courses/1234/Home"> Go </a>
        </div>
        <br></br>

        <img src="/images/english.jpg" width={200} />
        <div className="wd-dashboard-course">
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/1234/Home"
          >
            English1
          </a>
          <p className="wd-dashboard-course-title">
          English class
          </p>
          <a href="#/Kanbas/Courses/1234/Home"> Go </a>
        </div>
        <br></br>

        <img src="/images/english2.jpg" width={200} />
        <div className="wd-dashboard-course">
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/1234/Home"
          >
            English2
          </a>
          <p className="wd-dashboard-course-title">
          English class 2
          </p>
          <a href="#/Kanbas/Courses/1234/Home"> Go </a>
        </div>
        <br></br>

        <img src="/images/pe.jpg" width={200} />
        <div className="wd-dashboard-course">
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/1234/Home"
          >
            PE
          </a>
          <p className="wd-dashboard-course-title">
            PE class 
          </p>
          <a href="#/Kanbas/Courses/1234/Home"> Go </a>
        </div>
        <br></br>
      </div>
    </div>
  );
}
