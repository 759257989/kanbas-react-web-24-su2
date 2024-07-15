export default function Dashboard() {
  return (
    <div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
  <div id="wd-dashboard-courses" className="row" >
    
    <div className="row row-cols-1 row-cols-md-5 g-4">
      <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%" height ="180px"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
               <p className="card-text">
                  Full Stack software developer
                </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </a>
        </div>
      </div>

      <div className="wd-dashboard-course col" style={{ width: "270px" }}><div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
            <img src="/images/MathA.jpg" width="100%" height ="180px"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              MathA
              </h5>
               <p className="card-text">
               math A class
                </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </a>
        </div></div>

      <div className="wd-dashboard-course col" style={{ width: "270px" }}><div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
            <img src="/images/MathB.jpg" width="100%" height ="180px"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              MathB
              </h5>
               <p className="card-text">
               math B class
                </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </a>
        </div></div>

      <div className="wd-dashboard-course col" style={{ width: "270px" }}><div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
            <img src="/images/history.jpg" width="100%" height ="180px"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              History
              </h5>
               <p className="card-text">
               History class
                </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </a>
        </div></div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}><div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
            <img src="/images/art.jpg" width="100%" height ="180px"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              Art
              </h5>
               <p className="card-text">
               art class
                </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </a>
        </div></div>
        <div className="wd-dashboard-course col" style={{ width: "270px" }}><div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
            <img src="/images/english.jpg" width="100%" height ="180px"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              English1
              </h5>
               <p className="card-text">
               English1 class
                </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </a>
        </div></div>
        <div className="wd-dashboard-course col" style={{ width: "270px" }}><div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
            <img src="/images/english2.jpg" width="100%" height ="180px"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              English2
              </h5>
               <p className="card-text">
               english2 class
                </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </a>
        </div></div>
    </div>
  </div></div>

  )
}