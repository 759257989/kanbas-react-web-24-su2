import Modules from "../Modules";
import ProtectedRouteFaculty from "./ProtectedRouteFaculty";
import CourseStatus from "./Status";
export default function Home() {
  return (
    
    
<div id="wd-home" className="d-flex">
  <div className="flex-fill me-5">
    <Modules />
   
  </div>
  <ProtectedRouteFaculty>
    {/* only FACULTY account can see the module creating buttons  */}
  <div className="d-none d-xl-block">
    <CourseStatus />
  </div>
  </ProtectedRouteFaculty>
</div>


  );
}
