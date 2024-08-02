import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function GetModule() {
  //   const [a, setA] = useState("34");
  //   const [b, setB] = useState("23");
  const [module, setModule] = useState({
    id: 1,
    course: "intro web dev",
    name: "learn react",
    description: "Create a NodeJS server with ExpressJS",
  });

  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  return (
    <div>
      <h3>Module</h3>

      <a
        className="btn btn-primary me-2"
        id="wd-path-parameter-subtract"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a>

      <a
        className="btn btn-primary me-2"
        id="wd-path-parameter-subtract"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>

      <a
        className="btn btn-primary me-2"
        id="wd-path-parameter-subtract"
        href={`${REMOTE_SERVER}/lab5/module/description`}
      >
        Get Module Description
      </a>

      <h4>Modifying Module Properties</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Name
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />

      <br />
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Description
      </a>
      <input
        className="form-control w-75"
        id="wd-module-description"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />

      
      <hr />
    </div>
  );
}
