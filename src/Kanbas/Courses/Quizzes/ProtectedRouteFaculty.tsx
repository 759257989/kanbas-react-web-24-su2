import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteFaculty({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser  && currentUser.role === "FACULTY") {
    return children;
  }
//  else {
//     return <Navigate to="/Kanbas/Account/Signin" />;
//   }
}
