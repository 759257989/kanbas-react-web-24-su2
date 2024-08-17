

import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import React, { useState , useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import ProtectedRouteFaculty from "./ProtectedRouteFaculty";



export default function Modules() {
  const { cid } = useParams();
  // console.log("moduole cid in modules.index.tsx: ", cid)
  const [theCurrentCourse, setCurrentCourse] = useState<any>(null);
  

  //client 从mongodb中查找所用的course 有id == cid的，然后保存下来
  const currentCourse = async (cid: any) => {
    const result = await client.findCourseById(cid)
    // console.log("the result get from find course by id in index model: ", result)
    
    setCurrentCourse(result)
  }


  // console.log("current course in modules: ", theCurrentCourse)
  // const { courseNumber } = useParams<{ courseNumber: string }>();
  // console.log("moduole coursenumber: ", courseNumber)
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    // console.log("Delete button clicked for moduleId:", moduleId); // Add this line
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  };

  const fetchModules = async () => {
    // console.log("the fetch current course number in index modules: ", theCurrentCourse.number)
    const modules = await client.findModulesForCourse( theCurrentCourse.number as string);
    // console.log("the modules find in modules index: ", modules)
    dispatch(setModules(modules));
  };

  useEffect(() => {
    currentCourse(cid);
  }, [cid]);
  
  useEffect(() => {
    if (theCurrentCourse) {
      fetchModules();
    }
  }, [theCurrentCourse]); // Run this effect when theCurrentCourse changes

  return (
    <div id="wd-modules">
      <ProtectedRouteFaculty>
        {/* only FACULTY account can see the module creating buttons  */}
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          createModule({ name: moduleName, course: theCurrentCourse.number });
          setModuleName("");
        }}
      />
      
      <br />
      <br />
      <br />
      <br />
      </ProtectedRouteFaculty>
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          // .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-4 bg-secondary text-black">
                {!module.editing && module.name}
                {module.editing && (
                  <input className="form-control w-50 d-inline-block" value={module.name}
                  onChange={(e) => saveModule({ ...module, name: e.target.value }) }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule({ ...module, editing: false });
                    }
                  }} />
                )}
                <ProtectedRouteFaculty>
                   {/* only FACULTY account can see the module creating buttons  */}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    removeModule(moduleId); 
                  }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
                </ProtectedRouteFaculty>
              </div>

              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li
                      key={lesson._id}
                      className="wd-lesson list-group-item p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
